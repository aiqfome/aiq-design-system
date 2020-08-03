import React from 'react'
import PropTypes from 'prop-types'
import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'

export interface Props extends DefaultTheme {
  checked?: boolean
  onChange?(): any
  disabled?: boolean
}

const SwitchStyled = styled.label`
  ${space}

  & > input {
    cursor: pointer;
    width: 40px;
    height: 15px;
    position: relative;
    margin: 0 10px 0 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.grey};
      border-radius: 30px;
      height: 100%;
      transition: all 0.25s ease-in-out;
    }

    &::after {
      width: 21px;
      height: 21px;
      margin-top: -3px;
      background-color: ${({ theme }) => theme.colors.lightGrey};
      border-radius: 21px;
      right: 19px;
      box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
      transition: all 0.2s;
    }

    &:not(:checked):not(:disabled):hover::before {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }

    &:checked::after {
      right: 0;
    }

    &:checked::before {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &:disabled {
      cursor: default;
    }

    &:disabled::after {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.mediumGrey};
    }

    &:disabled::before {
      background-color: ${({ theme }) => theme.colors.white};
      border-color: rgba(0, 0, 0, 0.12);
      box-shadow: none;
    }

    &:disabled:checked::before {
      background-color: ${({ theme }) => theme.colors.mediumGrey};
    }

    &:disabled:checked:after {
      background-color: ${({ theme }) => theme.colors.primaryLight};
      box-shadow: none;
    }

    label {
      display: block;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`

export const Switch: React.FC<Props> = ({
  checked = false,
  disabled = false,
  onChange
}: Props) => {
  return (
    <SwitchStyled>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
    </SwitchStyled>
  )
}

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}
