import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import styled, { DefaultTheme } from 'styled-components'
import {
  size,
  SizeProps,
  margin,
  MarginProps,
  layout,
  LayoutProps
} from 'styled-system'

import { Box } from '../Box'

type Item = {
  label: any
  value: any
}
export interface Props extends SizeProps, MarginProps, LayoutProps {
  label: string
  itens: Item[]
  opened?: boolean
  onChange?: (item: any) => void
  disabled?: boolean
  selected?: any
}

const BoxStyled = styled(Box)`
  position: relative;
`

interface DropdownStyledProps extends DefaultTheme {
  disabled?: boolean
}

const DropdownStyled = styled.div<DropdownStyledProps>`
  ${size}
  ${margin}
  ${layout}

  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  border: 1px solid ${props => props.theme.colors.mediumGrey};
  color: ${props => props.theme.colors.almostBlack};
  padding: 5px 5px 5px 16px;
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[3]};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    flex: 1;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    height: 24px;
  }
`

interface ItensStyledProps extends DefaultTheme, LayoutProps {}

const ItensStyled = styled.ul<ItensStyledProps>`
  ${layout}
  list-style: none;
  border: 1px solid ${props => props.theme.colors.mediumGrey};
  color: ${props => props.theme.colors.almostBlack};
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[3]};

  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  position: absolute;
  width: 100%;
  top: 38px;

  li {
    padding: 8px;

    &:hover {
      cursor: pointer;
      background: #fdeaf4;
    }
  }
`

export const Dropdown: React.FC<Props> = ({
  label,
  opened,
  itens,
  maxWidth,
  selected,
  disabled = false,
  onChange = () => {
    // do nothing.
  },
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(opened)
  const [itemSelected, setItemSelect] = useState({ value: null, label: '' })

  useEffect(() => {
    if (selected) {
      const indexItem = itens.findIndex(item => item.value === selected)
      if (indexItem > -1) setItemSelect(itens[indexItem])
    }
  }, [itens, selected])

  function handleClickDropdown() {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  function handleClickItem(item) {
    if (!disabled) {
      setIsOpen(false)
      onChange(item)
      setItemSelect(item)
    }
  }

  return (
    <BoxStyled maxHeight='37px' maxWidth={maxWidth} {...props}>
      <DropdownStyled
        data-testid='dropdown'
        onClick={handleClickDropdown}
        disabled={disabled}
      >
        <span>{itemSelected.value != null ? itemSelected.label : label}</span>
        <button type='button'>
          {isOpen ? <MdArrowDropUp size={24} /> : <MdArrowDropDown size={24} />}
        </button>
      </DropdownStyled>
      {isOpen && (
        <ItensStyled maxWidth={maxWidth}>
          {itens.map(item => (
            <li
              data-testid='dropdown-item'
              onClick={() => handleClickItem(item)}
              key={item.value}
            >
              {item.label}
            </li>
          ))}
        </ItensStyled>
      )}
    </BoxStyled>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  itens: PropTypes.array.isRequired,
  selected: PropTypes.any,
  opened: PropTypes.bool,
  maxWidth: PropTypes.number,
  width: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
