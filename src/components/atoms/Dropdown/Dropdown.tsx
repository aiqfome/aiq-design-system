import React from 'react'
import PropTypes from 'prop-types'
import { MdArrowDropDown } from 'react-icons/md'
import styled, { DefaultTheme } from 'styled-components'
import {
  size,
  SizeProps,
  margin,
  MarginProps,
  layout,
  LayoutProps
} from 'styled-system'

export interface Props extends SizeProps, MarginProps, LayoutProps {
  label: string
  itens: string[]
  onChange?: (item: any) => void
}

const DropdownStyled = styled.div<DefaultTheme>`
  ${size}
  ${margin}
  ${layout}

  &:hover{
    cursor: pointer;
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

export const Dropdown: React.FC<Props> = ({ label, ...props }) => {
  return (
    <DropdownStyled {...props}>
      <span>{label}</span>
      <button type='button'>
        <MdArrowDropDown size={24} />
      </button>
    </DropdownStyled>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  itens: PropTypes.array.isRequired,
  onChange: PropTypes.func
}
