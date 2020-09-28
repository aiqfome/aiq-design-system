import React, { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import styled, { css, DefaultTheme } from 'styled-components'
import { space } from 'styled-system'

export interface Props
  extends DefaultTheme,
    InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  disabled?: boolean
  variant?: 'default' | 'small'
}

const switchVariations: { [index: string]: any } = {
  default: css`
    & > input {
      width: 40px;
      height: 15px;

      &::after {
        margin-top: -3px;
        width: 21px;
        height: 21px;
        right: 19px;
      }
    }
  `,
  small: css`
    & > input {
      width: 25px;
      height: 10px;

      &::after {
        margin-top: -2px;
        width: 14px;
        height: 14px;
        right: 11px;
      }
    }
  `
}

const SwitchStyled = styled.label<Props>`
  ${space}

  display: flex;
  align-items: center;

  ${({ variant }) => switchVariations[variant || 'default']}

  & > input {
    cursor: pointer;
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
      background-color: ${({ theme }) => theme.colors.lightGrey};
      border-radius: 21px;
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
      background-color: ${({ theme }) => theme.colors.mediumGrey};
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
  variant = 'default',
  className,
  ...props
}: Props) => {
  return (
    <SwitchStyled className={className} variant={variant}>
      <input type='checkbox' checked={checked} {...props} />
    </SwitchStyled>
  )
}

Switch.propTypes = {
  checked: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'small'])
}
