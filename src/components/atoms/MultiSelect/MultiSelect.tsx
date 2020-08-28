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

export interface Props {
  maxWidth?: number | string
  filters?: {
    label: string
    allItems?: boolean
    clear?: boolean
    items?: number[]
  }[]
  items: {
    value: any
    label: string
  }[]
}

const MultiSelectStyled = styled(Box)`
  position: relative;
  width: 100%;

  &:hover {
    cursor: text;
  }
`

const ContainerInput = styled(Box)`
  /* overflow: hidden; */
`

interface OverflowProps {
  isOpen?: boolean
}

const Overflow = styled(Flex)<OverflowProps>`
  position: absolute;
  width: 100%;
  border-top: none;

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

export const MultiSelect: React.FC<Props> = ({
  items,
  maxWidth,
  filters = [],
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string | undefined>('')

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({ initialSelectedItems: [items[0], items[1]] })

  const getFilteredItems = () =>
    items.filter(
      item =>
        inputValue !== undefined &&
        selectedItems.indexOf(item) < 0 &&
        item.label.toLowerCase().startsWith(inputValue.toLowerCase())
    )
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu
  } = useCombobox({
    itemToString: item => (item ? '' : ''),
    items: getFilteredItems(),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true // keep the menu open after selection.
          }
      }
      return changes
    },
    onStateChange: ({ inputValue: value, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(value)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
          }
          break
        default:
          break
      }
    }
  })

  function filterItems(filter) {
    if (filter.clear) {
      selectedItems.forEach(item => {
        removeSelectedItem(item)
      })
    }
    if (filter.allItems) {
      items.forEach(item => {
        addSelectedItem(item)
      })
    }
    if (filter.items) {
      filter.items.forEach((_, index) => {
        addSelectedItem(items[index])
      })
    }
  }

  return (
    <MultiSelectStyled maxWidth={maxWidth} {...props}>
      <ContainerInput
        backgroundColor='white'
        borderRadius={4}
        display='flex'
        flexDirection='row'
        py={3}
        px={5}
        border='1px solid #dedede'
        refBox={getComboboxProps().ref}
      >
        {selectedItems.map((selectedItem, index) => (
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
              {...getSelectedItemProps({ selectedItem, index })}
              cursor='pointer'
              color='white'
            >
              {selectedItem.label}
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

        <input
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
        />
      </ContainerInput>
      <Overflow
        isOpen={isOpen}
        py={7}
        flexDirection='column'
        backgroundColor='white'
        border='1px solid #dedede'
      >
        <ul>
          {filters.map((filter, index) => (
            <li key={`filter-${index}`} onClick={() => filterItems(filter)}>
              <Text cursor='pointer'>{filter.label}</Text>
            </li>
          ))}
        </ul>
        <Divider mx={5} my={4} />
        <Itens>
          <ul {...getMenuProps()}>
            {isOpen &&
              getFilteredItems().map((item, index) => (
                <li
                  className={highlightedIndex === index ? 'highlighted' : ''}
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item.label}
                </li>
              ))}
          </ul>
        </Itens>
      </Overflow>
    </MultiSelectStyled>
  )
}

MultiSelect.propTypes = {
  items: PropTypes.array.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filters: PropTypes.array
}
