import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { useCombobox, useMultipleSelection } from 'downshift'

import { Flex } from '../Flex'
import { Box } from '../Box'
import { Text } from '../Text'
import { Divider } from '../Divider'
import { Button } from '../Button'

type Item = {
  value: any
  label: string
}

export interface Props {
  maxWidth?: number | string
  filters?: {
    label: string
    allItems?: boolean
    clear?: boolean
    items?: number[]
  }[]
  onChange?: (event: any) => void
  value?: Item[]
  items: Item[]
}

const MultiSelectStyled = styled(Box)`
  &:hover {
    cursor: text;
  }
`

interface ContainerInputProps {
  onClick: () => void
}

const ContainerInput = styled(Box)<ContainerInputProps>`
  display: flex;
  flex-direction: row;
  overflow: auto;
  min-height: 39px;

  input {
    background: none;
    border: none;
    margin-bottom: 6px;
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
  onChange,
  value = [],
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string | undefined>('')

  const inputRef = useRef(document.createElement('input'))

  const propsMultipleSelection = useMultipleSelection({
    initialSelectedItems: value,
    onSelectedItemsChange: event => {
      onChange && onChange(event)
    }
  })

  const propsCombobox = useCombobox({
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
            propsMultipleSelection.addSelectedItem(selectedItem)
          }
          break
      }
    }
  })

  function getFilteredItems() {
    return items.filter(
      item =>
        inputValue !== undefined &&
        propsMultipleSelection.selectedItems.indexOf(item) < 0 &&
        item.label.toLowerCase().startsWith(inputValue.toLowerCase())
    )
  }

  function filterItems(filter) {
    if (filter.clear) {
      propsMultipleSelection.selectedItems.forEach(item => {
        propsMultipleSelection.removeSelectedItem(item)
      })
    }
    if (filter.allItems) {
      items.forEach(item => {
        propsMultipleSelection.addSelectedItem(item)
      })
    }
    if (filter.items) {
      filter.items.forEach((_, index) => {
        propsMultipleSelection.addSelectedItem(items[index])
      })
    }
  }

  return (
    <MultiSelectStyled position='relative' maxWidth={maxWidth} {...props}>
      <ContainerInput
        backgroundColor='white'
        borderRadius={4}
        display='flex'
        flexDirection='row'
        onClick={() => {
          inputRef.current.focus()
        }}
        pt={3}
        pb={0}
        px={5}
        border='1px solid #dedede'
        refBox={propsCombobox.getComboboxProps().ref}
      >
        {propsMultipleSelection.selectedItems.map((selectedItem, index) => (
          <Flex
            py={2}
            key={`selected-item-${index}`}
            px={4}
            mr={3}
            mb={3}
            display='flex'
            flexDirection='row'
            alignItems='center'
            backgroundColor='primary'
            borderRadius='3px'
          >
            <SelectedItem
              {...propsMultipleSelection.getSelectedItemProps({
                selectedItem,
                index
              })}
              color='white'
            >
              {selectedItem.label}
            </SelectedItem>
            <Button
              onClick={e => {
                e.stopPropagation()
                propsMultipleSelection.removeSelectedItem(selectedItem)
              }}
              ml={6}
            >
              <MdClose color='#fff' />
            </Button>
          </Flex>
        ))}

        <input
          type='text'
          {...propsCombobox.getInputProps(
            propsMultipleSelection.getDropdownProps({
              ref: inputRef,
              preventKeyAction: propsCombobox.isOpen,
              onFocus: () => {
                if (!propsCombobox.isOpen) {
                  propsCombobox.openMenu()
                }
              }
            })
          )}
        />
      </ContainerInput>
      <Overflow
        isOpen={propsCombobox.isOpen}
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
          <ul {...propsCombobox.getMenuProps()}>
            {propsCombobox.isOpen &&
              getFilteredItems().map((item, index) => (
                <li
                  className={
                    propsCombobox.highlightedIndex === index
                      ? 'highlighted'
                      : ''
                  }
                  key={`${item}${index}`}
                  {...propsCombobox.getItemProps({ item, index })}
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
  filters: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.array
}
