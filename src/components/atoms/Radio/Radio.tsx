import React from 'react'
import PropTypes from 'prop-types'
import styled, { DefaultTheme } from 'styled-components'
import { margin, MarginProps } from 'styled-system'

export interface Props extends MarginProps {
  name: string
  label?: string
  value: any
  disabled?: boolean
}

interface RadioStyled extends DefaultTheme, MarginProps {
  disabled: boolean
}

const RadioStyled = styled.label<RadioStyled>`
  ${margin}

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
    border: 2px solid #eb2f96;
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
    background-color: #eb2f96;
  }
`

export const Radio: React.FC<Props> = ({
  name,
  label,
  value,
  disabled = false,
  ...props
}) => {
  return (
    <RadioStyled disabled={disabled} {...props}>
      <div>
        <input
          type='radio'
          disabled={disabled}
          name={name}
          value={value}
          {...props}
        />
        <span />
      </div>

      {label}
    </RadioStyled>
  )
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  mx: PropTypes.number,
  my: PropTypes.number,
  m: PropTypes.number
}
