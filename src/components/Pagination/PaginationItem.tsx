import React from 'react'

import PropTypes from 'prop-types'

import styled, { css, DefaultTheme } from 'styled-components'

import { Button } from '../Button'

interface Props extends DefaultTheme {
  active?: boolean
  children?: any
  cursor?: string
  className?: string
  disabled?: boolean
  size?: 'default' | 'small' | 'large'
  onClick?: () => void
}

const ItemPageStyled = styled(Button)<Props>`
  &.__pagination-size-large {
    height: 42px;
    min-width: 42px;
  }
  &.__pagination-size-default {
    height: 34px;
    min-width: 34px;
  }
  &.__pagination-size-small {
    height: 28px;
    min-width: 28px;
  }

  padding: 0 8px;
  border: 1px solid #dedede;
  border-radius: 0;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  &:hover {
    outline: none;
    text-decoration: none;
  }

  cursor: ${({ cursor }) => cursor || 'pointer'};

  & span {
    cursor: ${({ cursor }) => cursor || 'pointer'};
  }

  ${({ active, theme }) =>
    active &&
    css`
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};

      span {
        color: ${theme.colors.white};
      }
    `}
`

export const PaginationItem: React.FC<Props> = ({
  children,
  size = 'default',
  ...props
}) => {
  return (
    <ItemPageStyled
      className={`__pagination-item __pagination-size-${size}`}
      size={size}
      {...props}
    >
      {children}
    </ItemPageStyled>
  )
}

PaginationItem.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(['default', 'small', 'large'])
}
