import React from 'react'

import PropTypes from 'prop-types'

import styled, { css, DefaultTheme } from 'styled-components'

interface Props extends DefaultTheme {
  active?: boolean
  children?: any
  cursor?: string
  className?: string
  disabled?: boolean
  size?: 'default' | 'small' | 'large'
  onClick?: () => void
}

const ItemPageStyled = styled.button<Props>`
  background: #fff;
  border: 1px solid #dedede;
  color: #8c8c8c;

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
  &.__button-text {
    padding: 0 8px;
    border: 1px solid #dedede;
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
`

export const PaginationItem: React.FC<Props> = ({
  children,
  size = 'default',
  className,
  active,
  ...props
}) => {
  return (
    <ItemPageStyled
      active={active}
      className={`${className} __pagination-item __pagination-size-${size}`}
      size={size}
      {...props}
    >
      {children}
    </ItemPageStyled>
  )
}

PaginationItem.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(['default', 'small', 'large']),
  className: PropTypes.string,
  active: PropTypes.bool
}
