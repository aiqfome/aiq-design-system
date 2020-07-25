import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

import { useCombobox } from 'downshift'

import { IoIosArrowDown } from 'react-icons/io'

import { Box } from '../Box'
import { Input } from '../Input'

const Container = styled(Box)`
  position: relative;
`

const List = styled.ul`
  bottom: 75px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 10px;
  list-style-type: none;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  width: 100%;

  li {
    cursor: pointer;
    padding: 8px;
  }

  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `}
`

export const Select = ({ label, items, ...props }) => {
  const [inputItems, setInputItems] = useState(items)

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getToggleButtonProps,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter(item =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    }
  })

  return (
    <Container>
      <List {...getMenuProps()} isOpen={isOpen}>
        {isOpen &&
          inputItems &&
          inputItems.length > 0 &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </List>

      <Box {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          label={label}
          sufix={inputItems && <IoIosArrowDown {...getToggleButtonProps()} />}
        />
      </Box>
    </Container>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array
}

Select.defaultProps = {
  items: []
}
