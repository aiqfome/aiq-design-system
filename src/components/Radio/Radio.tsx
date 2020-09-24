import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { DefaultTheme } from 'styled-components'
import { margin, MarginProps } from 'styled-system'

export interface Props extends MarginProps {
  name: string
  value: any
  disabled?: boolean
  checked?: boolean
  onChange?: (event: any) => void
  onClick?: (event: any) => void
}

interface RadioStyled extends DefaultTheme, MarginProps {
  disabled: boolean
}

const RadioStyled = styled.label<RadioStyled>`
  ${margin}

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  opacity: ${props => (props.disabled ? 0.5 : 1)};

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
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  input:checked ~ span {
    background-color: #fff;
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    top: 3px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const Radio: React.FC<Props> = ({
  name,
  value,
  disabled = false,
  checked = false,
  onChange = () => {
    // do nothing.
  },
  onClick = () => {
    // do nothing.
  },
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  function handleRadioOnChange(event) {
    onChange(event)
    setIsChecked(!isChecked)
  }

  return (
    <RadioStyled disabled={disabled} {...props}>
      <input
        type='radio'
        disabled={disabled}
        name={name}
        onChange={handleRadioOnChange}
        onClick={onClick}
        checked={isChecked}
        value={value}
        {...props}
      />
      <span />
    </RadioStyled>
  )
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  mx: PropTypes.number,
  my: PropTypes.number,
  m: PropTypes.number
}
