import React, { useState } from 'react'
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

export interface Props extends SizeProps, MarginProps, LayoutProps {
  label: string
  itens: string[]
  opened?: boolean
  onChange?: (item: any) => void
  disabled?: boolean
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

  &:hover{
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  border: 1px solid ${props => props.theme.colors.mediumGrey};
  color: ${props => props.theme.colors.almostBlack};
  padding: 7px 5px 6px 16px;
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[3]};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span{
    flex: 1;
  }

  button{
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
  disabled = false,
  onChange = () => {},
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(opened)

  function handleClickDropdown() {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  function handleClickItem(item) {
    if (!disabled) {
      setIsOpen(false)
      onChange(item)
    }
  }

  return (
    <BoxStyled maxWidth={maxWidth} {...props}>
      <DropdownStyled onClick={handleClickDropdown} disabled={disabled}>
        <span>{label}</span>
        <button type='button'>
          {isOpen ? <MdArrowDropUp size={24} /> : <MdArrowDropDown size={24} />}
        </button>
      </DropdownStyled>
      {isOpen && (
        <ItensStyled maxWidth={maxWidth}>
          {itens.map(item => (
            <li onClick={() => handleClickItem(item)} key={item}>
              {item}
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
  opened: PropTypes.bool,
  maxWidth: PropTypes.number,
  width: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
