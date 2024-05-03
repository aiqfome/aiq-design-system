import React, { useState, useRef, useEffect, ReactNode } from 'react'

import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { useCombobox, useMultipleSelection } from 'downshift'

import { Flex } from '../Flex'
import { Box } from '../Box'
import { Text } from '../Text'
import { Divider } from '../Divider'
import { Button } from '../Button'
import { InputErrorMessage } from '../InputErrorMessage'
import { isEmpty } from 'lodash'

type Item = {
  id: any
  name: string
  select?: string
  color?: string
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
  selectedItemsLimit?: number
  limitMessage?: string
  suffix?: ReactNode
  isFetchable?: boolean
  placeholder?: string
  errorMessage?: string
  errorForm?: boolean
  isDependent?: boolean
  emptyMessage?: string
  dependentMessage?: string
  disabled?: boolean
  removable?: boolean
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
  changeBackgroundColor?: boolean
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

  ${({ changeBackgroundColor, theme }) =>
    changeBackgroundColor && `background-color: ${theme.colors.lightGrey};`};

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

      @media (hover: hover) {
        &:hover {
          cursor: pointer;
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
        }
      }

      @media (hover: none) {
        &:active {
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`

const Itens = styled(Box)`
  max-height: 250px;
  overflow: auto;
`

const SelectedItem = styled(Text)`
  white-space: nowrap;
`

const SelectedList = styled.ul`
  li {
    display: flex;
    color: ${({ theme }) => theme.colors.white};
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.primary} !important;
    margin-bottom: 2px;
  }
`

const CustomText = styled(Text)`
  display: block;

  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 15px;

  margin-left: 8px;
  margin-bottom: 8px;
`

export const MultiSelectStatic: React.FC<Props> = ({
  items,
  selectedItemsLimit,
  limitMessage = 'quantidade máxima atingida',
  maxWidth,
  filters = [],
  onChange,
  value = [],
  placeholder,
  suffix,
  errorForm,
  errorMessage,
  emptyMessage = 'item não encontrado ou já adicionado',
  isDependent = false,
  dependentMessage = 'este campo tem alguma dependência',
  disabled,
  removable = false,
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

  const hasOnlyNumbers = (str: string) => /^[0-9]+$/.test(str)

  const getFilteredItems = () => {
    const userSearchInput = inputValue.toLowerCase()
    return items
      .filter(item => {
        const itemId = item.name.match(/\d+/)
        return (
          selectedItems.every(selectedItem => selectedItem.id !== item.id) &&
          (hasOnlyNumbers(userSearchInput) && itemId && itemId[0]
            ? itemId[0].startsWith(userSearchInput)
            : item.name.toLowerCase().startsWith(userSearchInput))
        )
      })
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
  }

  const clear = () => {
    setItemLimit(undefined)
    onChange({ selectedItems: [] })
  }

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    openMenu
  } = useCombobox({
    inputValue,
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

  const handleSelect = ({ e, item, index }) => {
    if (selectedItems.indexOf(item) > -1 && removable)
      onChange({
        selectedItems: selectedItems.filter(e => e.id !== item.id)
      })
    else getItemProps({ item, index }).onClick(e)
    setItemLimit(undefined)
  }

  const hasReachedLimit = selectedItemsLimit === selectedItems?.length

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
          ref={el => {
            getComboboxProps()?.ref(el)
            setRefContainer(el || null)
          }}
          changeBackgroundColor={disabled && selectedItems.length === 0}
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
                backgroundColor={
                  disabled ? 'darkGrey' : selectedItem?.color || 'primary'
                }
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
                  disabled={disabled}
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
            disabled={disabled}
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

          {suffix}
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
          {!isDependent && !disabled && !isEmpty(filters) && (
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

          {selectedItems.length > 0 && removable && (
            <>
              <CustomText>selecionados</CustomText>
              <SelectedList>
                {selectedItems
                  .sort((a, b) =>
                    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
                  )
                  .map((item, index) => (
                    <li
                      key={`selected-${index}`}
                      data-testid='selected-list'
                      onClick={() => {
                        onChange({
                          selectedItems: selectedItems.filter(
                            e => e.id !== item.id
                          )
                        })
                      }}
                    >
                      <Text cursor='pointer'>{item.name}</Text>
                      <MdClose color='#fff' />
                    </li>
                  ))}
              </SelectedList>
              <Divider mx={5} my={4} />
              <CustomText>restantes</CustomText>
            </>
          )}

          <Itens>
            <ul>
              {isOpen &&
                !isDependent &&
                !disabled &&
                !hasReachedLimit &&
                getFilteredItems().map((item, index) => (
                  <li
                    key={`${item}${index}`}
                    data-testid='select-item'
                    {...getItemProps({ item, index })}
                    onClick={e => handleSelect({ e, item, index })}
                  >
                    {item.name}
                  </li>
                ))}

              {isDependent && <li>{dependentMessage}</li>}

              {isOpen && !isDependent && getFilteredItems().length === 0 && (
                <li>{emptyMessage}</li>
              )}

              {hasReachedLimit && <li>{limitMessage}</li>}
            </ul>
          </Itens>
        </Overflow>
      </MultiSelectStyled>

      {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
    </Flex>
  )
}
