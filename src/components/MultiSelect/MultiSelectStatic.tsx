import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { useCombobox, useMultipleSelection } from 'downshift'

import { Flex } from '../Flex'
import { Box } from '../Box'
import { Text } from '../Text'
import { Divider } from '../Divider'
import { Button } from '../Button'
import { InputErrorMessage } from '../InputErrorMessage'

type Item = {
  id: any
  name: string
  select?: string
}

export interface Props {
  maxWidth?: number | string
  filters?: {
    name: string
    allItems?: boolean
    clear?: boolean
    items?: number[]
    onClick?: any
  }[]
  onChange?: any
  value?: Item[]
  items: Item[]
  isLoading?: boolean
  isFetchable?: boolean
  placeholder?: string
  errorMessage?: string
  errorForm?: boolean
  isDependent?: boolean
  emptyMessage?: string
  dependentMessage?: string
}

const MultiSelectStyled = styled(Box)`
  &:hover {
    cursor: text;
  }

  & input::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`

interface ContainerInputProps {
  ref?: any
  errorForm?: boolean
}

const ContainerInput = styled(Box)<ContainerInputProps>`
  display: flex;
  flex-direction: row;
  overflow: auto;
  align-items: center;
  padding: 4px 10px;
  border: ${({ errorForm, theme }) =>
    errorForm
      ? `1px solid ${theme.colors.error}`
      : `1px solid ${theme.colors.mediumGrey}`};

  input {
    background: none;
    border: none;
    height: 25px;
    font-family: inherit;
  }

  input::placeholder {
    font-family: inherit;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`

interface OverflowProps {
  isOpen?: boolean
}

const Overflow = styled(Flex)<OverflowProps>`
  position: absolute;
  min-width: 100%;
  width: max-content;
  z-index: 99;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 3px 10px;

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`

const Itens = styled(Box)`
  max-height: 250px;
  overflow: auto;

  .highlighted {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

const SelectedItem = styled(Text)`
  white-space: nowrap;
`

export const MultiSelectStatic: React.FC<Props> = ({
  items,
  maxWidth,
  filters = [],
  onChange,
  value = [],
  placeholder,
  errorForm,
  errorMessage,
  emptyMessage = 'item não encontrado ou já adicionado',
  isDependent = false,
  dependentMessage = 'este campo tem alguma dependência',
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [refBadges, setRefBadges] = useState<HTMLDivElement | null>(null)
  const [itemLimit, setItemLimit] = useState<number | undefined>(undefined)
  const [refContainer, setRefContainer] = useState<HTMLDivElement | null>(null)

  const inputRef = useRef(document.createElement('input'))

  const {
    getSelectedItemProps,
    getDropdownProps,
    selectedItems = []
  } = useMultipleSelection({
    selectedItems: value,
    initialSelectedItems: value,
    onSelectedItemsChange: event => {
      onChange && onChange(event)
    }
  })

  useEffect(() => {
    const resizeListener = () => setItemLimit(undefined)

    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  useEffect(() => {
    if (refBadges !== null && refContainer !== null) {
      if (selectedItems.length > 1) {
        const containerSize = refContainer.offsetWidth

        let total = 0
        let limit = -1
        ;(refBadges.childNodes as NodeListOf<HTMLDivElement>).forEach(
          (badge: HTMLDivElement, index) => {
            total = total + badge?.offsetWidth
            if (total >= containerSize * 0.9 - 60 && limit === -1) {
              limit = index
              return false
            }
          }
        )

        if (containerSize * 0.9 - 60 <= total && !itemLimit && limit >= 0) {
          if (itemLimit !== limit) setItemLimit(limit)
        }
      }
    }
  }, [
    refBadges,
    itemLimit,
    refContainer,
    selectedItems,
    refContainer?.offsetWidth
  ])

  const getFilteredItems = () =>
    items.filter(
      item =>
        selectedItems.indexOf(item) < 0 &&
        item.name.toLowerCase().startsWith(inputValue.toLowerCase())
    )

  const clear = () => {
    setItemLimit(undefined)
    onChange({ selectedItems: [] })
  }

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu
  } = useCombobox({
    inputValue,
    defaultHighlightedIndex: 0,
    selectedItem: null,
    items: isDependent ? [] : getFilteredItems(),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true
          }
      }
      return changes
    },
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue || '')
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            onChange({
              selectedItems: [...selectedItems, selectedItem]
            })
          }
          break
        default:
          break
      }
    }
  })

  const filterItems = filter => {
    if (filter.clear) {
      clear()
    }
    if (filter.allItems) {
      onChange({
        selectedItems: items
      })
    }
    if (filter.items) {
      onChange({
        selectedItems: items.filter((_, i) => filter?.items?.includes(i))
      })
    }
  }

  return (
    <Flex flexDirection='column' flex={1}>
      <MultiSelectStyled
        position='relative'
        maxWidth={maxWidth}
        data-testid='multiselect-static'
        onClick={() => inputRef.current.focus()}
        {...props}
      >
        <ContainerInput
          backgroundColor='white'
          borderRadius={4}
          display='flex'
          flexDirection='row'
          errorForm={errorForm}
          refBox={el => {
            getComboboxProps()?.ref(el)
            setRefContainer(el || null)
          }}
        >
          <Flex
            maxWidth='90%'
            overflow='hidden'
            ref={el => setRefBadges(el || null)}
          >
            {selectedItems.slice(0, itemLimit).map((selectedItem, index) => (
              <Flex
                minWidth={selectedItems.length === 1 ? 0 : undefined}
                py={2}
                key={`selected-item-${index}`}
                px={4}
                mr={3}
                display='flex'
                flexDirection='row'
                alignItems='center'
                backgroundColor='primary'
                borderRadius='3px'
                data-testid='select-selected-item'
              >
                <SelectedItem
                  truncate
                  {...getSelectedItemProps({
                    selectedItem,
                    index
                  })}
                  color='white'
                >
                  {selectedItem?.select || selectedItem?.name}
                </SelectedItem>

                <Button
                  onClick={e => {
                    e.stopPropagation()
                    onChange({
                      selectedItems: selectedItems.filter(
                        e => e.id !== selectedItem.id
                      )
                    })
                  }}
                  ml={6}
                >
                  <MdClose color='#fff' />
                </Button>
              </Flex>
            ))}

            {itemLimit !== undefined && selectedItems.length > itemLimit && (
              <Flex
                py={2}
                px={4}
                mr={3}
                display='flex'
                flexDirection='row'
                alignItems='center'
                backgroundColor='primary'
                borderRadius='3px'
              >
                <Text color='white'>{`+${
                  selectedItems.length - itemLimit
                }`}</Text>
              </Flex>
            )}
          </Flex>

          <input
            type='text'
            placeholder={placeholder}
            data-testid='select-input'
            style={{ width: '100%', flex: 1, paddingLeft: '5px' }}
            {...getInputProps(
              getDropdownProps({
                ref: inputRef,
                preventKeyAction: isOpen,
                onFocus: () => {
                  if (!isOpen) {
                    openMenu()
                  }
                }
              })
            )}
            autoComplete='disabled'
          />
        </ContainerInput>

        <Overflow
          isOpen={isOpen}
          mt={13}
          py={7}
          flexDirection='column'
          backgroundColor='white'
          border='1px solid #dedede'
          {...getMenuProps()}
        >
          {!isDependent && (
            <>
              <ul>
                {filters.map((filter, index) => (
                  <li
                    key={`filter-${index}`}
                    data-testid='select-filter'
                    onClick={() => {
                      if (filter.onClick) filter.onClick(filter)

                      filterItems(filter)
                    }}
                  >
                    <Text cursor='pointer'>{filter.name}</Text>
                  </li>
                ))}
              </ul>

              <Divider mx={5} my={4} />
            </>
          )}

          <Itens>
            <ul>
              {isOpen &&
                !isDependent &&
                getFilteredItems().map((item, index) => (
                  <li
                    className={highlightedIndex === index ? 'highlighted' : ''}
                    key={`${item}${index}`}
                    data-testid='select-item'
                    {...getItemProps({ item, index })}
                    onClick={e => {
                      getItemProps({ item, index }).onClick(e)
                      setItemLimit(undefined)
                    }}
                  >
                    {item.name}
                  </li>
                ))}

              {isDependent && <li>{dependentMessage}</li>}

              {isOpen && !isDependent && getFilteredItems().length === 0 && (
                <li>{emptyMessage}</li>
              )}
            </ul>
          </Itens>
        </Overflow>
      </MultiSelectStyled>

      {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
    </Flex>
  )
}

MultiSelectStatic.propTypes = {
  items: PropTypes.array.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filters: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.array,
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string,
  errorForm: PropTypes.bool,
  errorMessage: PropTypes.string,
  isDependent: PropTypes.bool,
  emptyMessage: PropTypes.string,
  dependentMessage: PropTypes.string
}
