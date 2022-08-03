import React, { InputHTMLAttributes, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import styled, { DefaultTheme, css } from 'styled-components'

import { margin, MarginProps } from 'styled-system'

import { Text } from '../Text'
import { Box } from '../Box'

export type Props = MarginProps &
  InputHTMLAttributes<HTMLInputElement> & {
    name: string
    value: any
    variant?: 'default' | 'small'
    disabled?: boolean
    label?: string
    checked?: boolean
    onChange?: (event: any) => void
  }

const radioVariations: { [index: string]: any } = {
  default: css`
    min-height: 21px;
    padding-left: 35px;
    div {
      height: 20px;
      width: 20px;
    }

    div:after {
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
    }
  `,
  small: css`
    min-height: 17px;
    padding-left: 28px;
    div {
      height: 16px;
      width: 16px;
    }

    div:after {
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
    }
  `
}

interface RadioStyled extends DefaultTheme, MarginProps {
  disabled: boolean
  variant?: 'default' | 'small'
}

const RadioStyled = styled.label<RadioStyled>`
  ${margin}

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
  display: flex;
  align-items: center;
  position: relative;
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
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ variant }) => radioVariations[variant || 'default']}
`

export const Radio = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      disabled = false,
      checked = false,
      label,
      variant = 'default',
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
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked)

    useEffect(() => {
      setIsChecked(checked)
    }, [checked])

    const onChangeRadio = e => {
      if (!disabled) {
        setIsChecked(!checked)

        if (onChange) onChange(e)
      }
    }

    return (
      <RadioStyled
        mx={mx}
        my={my}
        variant={variant}
        m={m}
        mr={mr}
        ml={ml}
        className={className}
        disabled={disabled}
        data-testid='radio-container'
      >
        <input
          ref={ref}
          type='radio'
          disabled={disabled}
          name={name}
          onChange={onChangeRadio}
          checked={isChecked}
          value={value}
          data-testid='radio-input'
          {...props}
        />
        <Box />

        {label && <Text>{label}</Text>}
      </RadioStyled>
    )
  }
)

Radio.displayName = 'Radio'

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['small', 'default']),
  mx: PropTypes.any,
  my: PropTypes.any,
  m: PropTypes.any,
  mr: PropTypes.any,
  ml: PropTypes.any
}
