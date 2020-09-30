import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { useCombobox } from 'downshift'
import { IoIosArrowDown } from 'react-icons/io'

import { Box, Props as BoxPros } from '../Box'
import { Input } from '../Input'
import { Button, Props as ButtonProps } from '../Button'

export interface Props extends BoxPros {
  label?: string
  items?: Array<string | { value: any; label: any }>
  isOpen?: boolean
  variant?: 'outlined'
  prefix?: any
  placeholder?: string
  handleSelectedItemChange?: (item: any) => void
  onChangeTextInput?: (text: string) => void
  selectedItem?: any
  autoComplete?: boolean
  sufix?: any
}

const Container = styled(Box)<Props>`
  position: relative;

  ul {
    box-shadow: 0px 3px 6px #00000029;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    list-style-type: none;
    position: absolute;
    top: ${({ variant }) => (variant === 'outlined' ? '39px' : '38px')};
    overflow: hidden;
    z-index: 1;
    width: 100%;
    padding: 0;
    margin: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    li {
      cursor: pointer;
      padding: 6px 12px;
    }

    ${({ isOpen }) =>
      !isOpen &&
      css`
        display: none;
      `}
  }
`
interface ItemProps {
  highlighted?: boolean
}

const Item = styled.li<ItemProps>`
  background: ${({ highlighted, theme }) =>
    highlighted ? theme.colors.primaryLight : '#fff'};
`

interface ButtonStyledProps extends ButtonProps {
  variantSelect?: any
}

const ButtonStyled = styled(Button)<ButtonStyledProps>`
  position: absolute;
  top: ${({ variantSelect }) =>
    variantSelect === 'outlined' ? '13px' : '12px'};
  right: 14px;
`

export const Select: React.FC<Props> = ({
  label,
  variant,
  items = [],
  placeholder,
  selectedItem,
  autoComplete = true,
  sufix,
  handleSelectedItemChange = () => {
    // do nothing.
  },
  onChangeTextInput = () => {
    // do nothing.
  },
  prefix,
  ...props
}) => {
  const [inputItems, setInputItems] = useState(items)

  const { backgroundColor, border, width, maxWidth } = props
  const boxStyled = {
    backgroundColor,
    border,
    width,
    maxWidth
  }

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getToggleButtonProps,
    openMenu,
    getItemProps
  } = useCombobox({
    onSelectedItemChange: handleSelectedItemChange,
    items: inputItems,
    selectedItem,
    itemToString: item => (typeof item === 'string' ? item : item.label),
    onInputValueChange: ({ inputValue = '' }) => {
      if (autoComplete) {
        onChangeTextInput(inputValue)
        setInputItems(
          items.filter(item => {
            const label = typeof item === 'string' ? item : item.label
            return label.toLowerCase().startsWith(inputValue.toLowerCase())
          })
        )
      }
    }
  })

  function handleClickInput() {
    if (!isOpen) {
      openMenu()
    }
  }

  return (
    <Container isOpen={isOpen} variant={variant} {...props}>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems &&
          inputItems.length > 0 &&
          inputItems.map((item, index) => (
            <Item
              key={`${index}`}
              highlighted={highlightedIndex === index}
              {...getItemProps({ item, index })}
            >
              {typeof item === 'string' ? item : item.label}
            </Item>
          ))}
      </ul>

      <Box refBox={getComboboxProps().ref}>
        <Input
          onChange={getInputProps().onChange}
          onBlur={getInputProps().onBlur}
          onKeyDown={getInputProps().onKeyDown}
          onClick={handleClickInput}
          value={getInputProps().value}
          inputRef={getInputProps().ref}
          variant={variant}
          label={label}
          readOnly={!autoComplete}
          prefix={prefix}
          placeholder={placeholder}
          {...boxStyled}
        />
        {inputItems && (
          <ButtonStyled
            type='button'
            palette='primary'
            mr={5}
            variantSelect={variant}
            onClick={getToggleButtonProps().onClick}
            refButton={getToggleButtonProps().ref}
            aria-label='toggle menu'
          >
            {sufix || <IoIosArrowDown />}
          </ButtonStyled>
        )}
      </Box>
    </Container>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array,
  isOpen: PropTypes.bool,
  variant: PropTypes.oneOf(['outlined']),
  prefix: PropTypes.any,
  placeholder: PropTypes.string,
  handleSelectedItemChange: PropTypes.func,
  onChangeTextInput: PropTypes.func,
  selectedItem: PropTypes.any,
  autoComplete: PropTypes.bool,
  backgroundColor: PropTypes.any,
  border: PropTypes.any,
  width: PropTypes.any,
  maxWidth: PropTypes.any,
  sufix: PropTypes.any
}

Select.defaultProps = {
  items: []
}
