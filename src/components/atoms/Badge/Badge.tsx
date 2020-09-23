import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled, { css, DefaultTheme } from 'styled-components'
import {
  color,
  border,
  BorderProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  background,
  BackgroundColorProps
} from 'styled-system'

import { Text } from '../Text'
import { Tooltip } from '../Tooltip'

export interface Props
  extends DefaultTheme,
    SpaceProps,
    BorderProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps,
    BackgroundColorProps {
  count?: number
  children?: ReactNode
  statusColor?: string
  overflowCount?: number
  variant?: 'label' | 'default' | 'status'
}

const badgeVariations: { [index: string]: any } = {
  default: css<Props>`
    color: #fff;
    background-color: #ff4d4f;
    padding: 1px 8px;
    margin-right: 16px;
    border-radius: 12px;
    width: fit-content;
    font-size: 14px;
  `,
  label: css<Props>`
    color: #fff;
    background-color: #ff4d4f;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 14px;
    width: fit-content;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  `,
  status: css<Props>`
    cursor: pointer;

    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: ${({ statusColor, theme }) =>
        statusColor ? theme.colors[statusColor] : '#ff4d4f'};
    }
  `
}

const BadgeStyled = styled(Text)<Props>`
  ${({ variant }) => badgeVariations[variant || 'default']}

  display: inline-flex;
  align-items: center;

  ${color}
  ${space}
  ${border}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${background}
`

const getCounter = (value, overflow) => {
  if (value) {
    if (overflow && !isNaN(value) && value > overflow) {
      return (
        <Tooltip body={value} variant='right-bottom'>{`${overflow}+`}</Tooltip>
      )
    }

    return value
  }

  return ''
}

export const Badge: React.FC<Props> = ({
  count,
  variant,
  children,
  overflowCount,
  ...props
}) => {
  if (variant === 'status') {
    return (
      <BadgeStyled variant={variant} {...props}>
        {children}
      </BadgeStyled>
    )
  }

  return (
    <BadgeStyled variant={variant} {...props}>
      {getCounter(count, overflowCount) || children}
    </BadgeStyled>
  )
}

Badge.defaultProps = {
  variant: 'default'
}

Badge.propTypes = {
  count: PropTypes.number,
  children: PropTypes.node,
  statusColor: PropTypes.string,
  overflowCount: PropTypes.number,
  variant: PropTypes.oneOf(['label', 'default', 'status'])
}
