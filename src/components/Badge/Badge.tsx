import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled, { css, DefaultTheme } from 'styled-components'
import {
  color,
  ColorProps,
  border,
  BorderProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

import { Text } from '../Text'
import { Tooltip } from '../Tooltip'

export interface Props
  extends ColorProps,
    DefaultTheme,
    SpaceProps,
    BorderProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  color?: string
  count?: number
  children?: ReactNode
  statusColor?: string
  overflowCount?: number
  variant?: 'label' | 'default'
}

const badgeVariations: { [index: string]: any } = {
  default: css<Props>`
    padding: 1px 8px;
    margin-right: 16px;
    border-radius: 12px;
    width: fit-content;
    font-size: 14px;
  `,
  label: css<Props>`
    text-align: center;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 14px;
    width: fit-content;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
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
  return (
    <BadgeStyled variant={variant} {...props}>
      {getCounter(count, overflowCount) || children}
    </BadgeStyled>
  )
}

Badge.propTypes = {
  count: PropTypes.number,
  children: PropTypes.node,
  statusColor: PropTypes.string,
  overflowCount: PropTypes.number,
  variant: PropTypes.oneOf(['label', 'default'])
}

Badge.defaultProps = {
  variant: 'default',
  color: '#262626',
  backgroundColor: '#dedede'
}
