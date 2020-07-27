import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

import { useCombobox } from 'downshift'

import { IoIosArrowDown } from 'react-icons/io'

import { Box } from '../Box'
import { Input } from '../Input'
import { Button } from '../Button'

const Container = styled(Box)`
  position: relative;
  ul{
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    padding: 10px;
    list-style-type: none;
    position: absolute;
    top: 57px;
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
    }
`

const ButtonStyled = styled(Button)`
  position: absolute;
  top: 24px;
  right: 14px;
`;

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
    <Container isOpen={isOpen}>
      <ul {...getMenuProps()} >
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
      </ul>
        
      <Box {...getComboboxProps()} forwardedRef={getComboboxProps()['ref']} >
        <Input
          inputRef={getInputProps()['ref']}          
          {...getInputProps()}
          label={label}
        />
        {inputItems && (
          <ButtonStyled
            palette='primary' mr={5}
            type="button"
            {...getToggleButtonProps()}
            aria-label="toggle menu">
            <IoIosArrowDown  />
          </ButtonStyled>)}
        
        
      </Box>
    </Container>
  )
}


Select.defaultProps = {
  items: []
}
