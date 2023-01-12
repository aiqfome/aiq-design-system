import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { useCombobox, useMultipleSelection } from 'downshift'

import { Flex } from '../Flex'
import { Box } from '../Box'
import { Text } from '../Text'
import { Divider } from '../Divider'
import { Button } from '../Button'
import { Loading } from '../Loading'
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
  handleSelectedItemChange?: (item: any) => void
  onChange?: any
  value?: Item[]
  items: Item[]
  isLoading?: boolean
  placeholder?: string
  loadingMessage?: string
  emptyMessage?: string
  errorMessage?: string
  errorForm?: boolean
  isDependent?: boolean
  dependentMessage?: string
  disabled?: boolean
}

interface ContainerInputProps {
  errorForm?: boolean
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
    flex: 1;
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

export const MultiSelectFetchable: React.FC<Props> = ({
  items,
  maxWidth,
  filters = [],
  onChange,
  value = [],
  isLoading = false,
  placeholder,
  loadingMessage = 'carregando...',
  emptyMessage = 'item não encontrado ou já adicionado',
  errorForm,
  errorMessage,
  isDependent = false,
  dependentMessage = 'este campo tem alguma dependência',
  disabled,
  handleSelectedItemChange = () => {
    // do nothing.
  },
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
    onSelectedItemsChange: handleSelectedItemChange
  })

  const getFilteredItems = () =>
    items.filter(item => selectedItems.indexOf(item) < 0)

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
    itemToString: item => (item ? '' : ''),
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
          onChange(inputValue)
          setInputValue(inputValue || '')
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            handleSelectedItemChange({
              selectedItems: [...selectedItems, selectedItem]
            })
          }
          onChange('')
          setInputValue('')
          break
        default:
          break
      }
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

        if (containerSize * 0.9 - 60 <= total && !itemLimit) {
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

  const clear = () => {
    setItemLimit(undefined)
    handleSelectedItemChange({ selectedItems: [] })
  }

  const filterItems = filter => {
    if (filter.clear) {
      clear()
    }
    if (filter.allItems) {
      handleSelectedItemChange({
        selectedItems: items
      })
    }
    if (filter.items) {
      handleSelectedItemChange({
        selectedItems: items.filter((_, i) => filter?.items?.includes(i))
      })
    }
  }

  return (
    <Flex flexDirection='column' flex={1}>
      <MultiSelectStyled
        position='relative'
        maxWidth={maxWidth}
        data-testid='multiselect-fechable'
        onClick={() => inputRef.current.focus()}
        {...props}
      >
        <ContainerInput
          backgroundColor='white'
          borderRadius={4}
          display='flex'
          flexDirection='row'
          errorForm={errorForm}
          ref={el => {
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
                py={2}
                minWidth={selectedItems.length === 1 ? 0 : undefined}
                key={`selected-item-${index}`}
                px={4}
                mr={3}
                display='flex'
                flexDirection='row'
                alignItems='center'
                backgroundColor={disabled ? 'darkGrey' : 'primary'}
                borderRadius='3px'
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
                  disabled={disabled}
                  onClick={e => {
                    e.stopPropagation()
                    handleSelectedItemChange({
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
                <Text color='white'>
                  {`+${selectedItems.length - itemLimit}`}
                </Text>
              </Flex>
            )}
          </Flex>

          <input
            disabled={disabled}
            type='text'
            placeholder={placeholder}
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

          {isLoading && <Loading size='small' />}
        </ContainerInput>

        <Overflow
          isOpen={isOpen && !disabled}
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
                !isLoading &&
                !disabled &&
                getFilteredItems().map((item, index) => (
                  <li
                    className={highlightedIndex === index ? 'highlighted' : ''}
                    key={`${item}${index}`}
                    onClick={e => {
                      getItemProps({ item, index }).onClick(e)
                      setItemLimit(undefined)
                    }}
                  >
                    {item.name}
                  </li>
                ))}

              {isDependent && <li>{dependentMessage}</li>}

              {isOpen && isLoading && !isDependent && <li>{loadingMessage}</li>}

              {isOpen &&
                !isLoading &&
                !isDependent &&
                getFilteredItems().length === 0 && <li>{emptyMessage}</li>}
            </ul>
          </Itens>
        </Overflow>
      </MultiSelectStyled>

      {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
    </Flex>
  )
}
