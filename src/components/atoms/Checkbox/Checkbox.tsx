import React from 'react'
import PropTypes from 'prop-types'
import styled, { DefaultTheme } from 'styled-components'
import { layout, space } from 'styled-system'
export interface Props extends DefaultTheme {
  checked?: boolean
  disabled?: boolean
  onClick?: any
}

const CheckboxStyled = styled.div<Props>`
  ${layout}
  ${space}
  
  position: relative;
  width: 21px;
  height: 21px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  :hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 2px;
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:after {
      content: '';
      position: absolute;
      display: none;
    }
  }

  input:checked ~ span {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    left: 4px;
    top: 1px;
    width: 4px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export const Checkbox: React.FC<Props> = ({
  checked,
  disabled,
  onClick,
  ...props
}) => {
  function handleClickCheckbox() {
    if (!disabled) {
      onClick()
    }
  }

  return (
    <CheckboxStyled
      disabled={disabled}
      onClick={handleClickCheckbox}
      {...props}
    >
      <input type='Checkbox' checked={checked} disabled={disabled} {...props} />
      <span />
    </CheckboxStyled>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.any
}
