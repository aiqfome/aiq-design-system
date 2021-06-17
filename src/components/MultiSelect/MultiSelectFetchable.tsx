import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
  }[]
  handleSelectedItemChange?: (item: any) => void
  onChange?: any
  value?: Item[]
  items: Item[]
  isLoading?: boolean
  itemLimit?: number
  placeholder?: string
  loadingMessage?: string
  emptyMessage?: string
  errorMessage?: string
  errorForm?: boolean
}

interface ContainerInputProps {
  errorForm?: boolean
}

const MultiSelectStyled = styled(Box)`
  &:hover {
    cursor: text;
  }
`

const ContainerInput = styled(Box)<ContainerInputProps>`
  display: flex;
  flex-direction: row;
  overflow: auto;
  align-items: center;
  padding: 4px 10px;
  justify-content: space-between;
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
  width: 100%;
  border-top: none;
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
  itemLimit = 2,
  placeholder,
  loadingMessage = 'carregando...',
  emptyMessage = 'item não encontrado ou já adicionado',
  errorForm,
  errorMessage,
  handleSelectedItemChange = () => {
    // do nothing.
  },
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>('')

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({
    onSelectedItemsChange: handleSelectedItemChange,
    initialSelectedItems: value
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
    items: getFilteredItems(),
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
            addSelectedItem(selectedItem)
          }
          onChange('')
          setInputValue('')
          break
        default:
          break
      }
    }
  })

  const clear = () => {
    selectedItems.forEach(item => {
      removeSelectedItem(item)
    })
  }

  const filterItems = filter => {
    if (filter.clear) {
      clear()
    }
    if (filter.allItems) {
      clear()
      items.forEach(item => {
        addSelectedItem(item)
      })
    }
    if (filter.items) {
      clear()
      filter.items.forEach((_, index) => {
        addSelectedItem(items[index])
      })
    }
  }

  return (
    <Flex flexDirection='column' flex={1}>
      <MultiSelectStyled
        position='relative'
        maxWidth={maxWidth}
        data-testid='multiselect-fechable'
        {...props}
      >
        <ContainerInput
          backgroundColor='white'
          borderRadius={4}
          display='flex'
          flexDirection='row'
          errorForm={errorForm}
          refBox={getComboboxProps().ref}
        >
          <Flex overflow='hidden' flex={1}>
            {selectedItems.slice(0, itemLimit).map((selectedItem, index) => (
              <Flex
                py={2}
                key={`selected-item-${index}`}
                px={4}
                mr={3}
                display='flex'
                flexDirection='row'
                alignItems='center'
                backgroundColor='primary'
                borderRadius='3px'
              >
                <SelectedItem
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
                    removeSelectedItem(selectedItem)
                  }}
                  ml={6}
                >
                  <MdClose color='#fff' />
                </Button>
              </Flex>
            ))}

            {selectedItems.length > itemLimit && (
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

            <input
              placeholder={placeholder}
              type='text'
              {...getInputProps(
                getDropdownProps({
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
          </Flex>

          {isLoading && <Loading size='small' />}
        </ContainerInput>

        <Overflow
          isOpen={isOpen}
          mt={13}
          py={7}
          flexDirection='column'
          backgroundColor='white'
          border='1px solid #dedede'
        >
          <ul>
            {filters.map((filter, index) => (
              <li key={`filter-${index}`} onClick={() => filterItems(filter)}>
                <Text cursor='pointer'>{filter.name}</Text>
              </li>
            ))}
          </ul>
          <Divider mx={5} my={4} />

          <Itens>
            <ul {...getMenuProps()}>
              {isOpen &&
                !isLoading &&
                getFilteredItems().map((item, index) => (
                  <li
                    className={highlightedIndex === index ? 'highlighted' : ''}
                    key={`${item}${index}`}
                    {...getItemProps({ item, index })}
                  >
                    {item.name}
                  </li>
                ))}

              {isOpen && isLoading && <li>{loadingMessage}</li>}

              {isOpen && !isLoading && getFilteredItems().length === 0 && (
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

MultiSelectFetchable.propTypes = {
  items: PropTypes.array.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filters: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.array,
  isLoading: PropTypes.bool,
  itemLimit: PropTypes.number,
  placeholder: PropTypes.string,
  handleSelectedItemChange: PropTypes.func,
  loadingMessage: PropTypes.string,
  emptyMessage: PropTypes.string,
  errorForm: PropTypes.bool,
  errorMessage: PropTypes.string
}
