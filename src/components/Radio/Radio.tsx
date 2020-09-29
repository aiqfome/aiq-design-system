import React, { InputHTMLAttributes } from 'react'

import PropTypes from 'prop-types'

import styled, { DefaultTheme } from 'styled-components'

import { margin, MarginProps } from 'styled-system'

import { Text } from '../Text'
import { Box } from '../Box'

export interface Props
  extends MarginProps,
    InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: any
  disabled?: boolean
  label?: string
  checked?: boolean
  onChange?: (event: any) => void
}

interface RadioStyled extends DefaultTheme, MarginProps {
  disabled: boolean
}

const RadioStyled = styled.label<RadioStyled>`
  ${margin}

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
  min-height: 21px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;

  opacity: ${props => (props.disabled ? 0.5 : 1)};

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  input:checked ~ div {
    background-color: #fff;
  }

  div:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ div:after {
    display: block;
  }

  div:after {
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
  label,
  onChange = () => {
    // do nothing.
  },
  className,
  mx,
  my,
  m,
  mr,
  ml,
  ...props
}) => {
  return (
    <RadioStyled
      mx={mx}
      my={my}
      m={m}
      mr={mr}
      ml={ml}
      className={className}
      disabled={disabled}
    >
      <input
        type='radio'
        disabled={disabled}
        name={name}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      <Box />

      {label && <Text>{label}</Text>}
    </RadioStyled>
  )
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  mx: PropTypes.any,
  my: PropTypes.any,
  m: PropTypes.any,
  mr: PropTypes.any,
  ml: PropTypes.any
}
