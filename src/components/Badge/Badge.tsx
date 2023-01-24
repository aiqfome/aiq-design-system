import React, { ReactNode, useCallback } from 'react'

import styled, { DefaultTheme } from 'styled-components'
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

export type Props = BorderProps &
  ColorProps &
  DefaultTheme &
  SpaceProps &
  BorderProps &
  LayoutProps &
  FontSizeProps &
  FontWeightProps & {
    color?: string
    count?: number
    children?: ReactNode
    className?: string
    statusColor?: string
    overflowCount?: number
    variant?: 'label' | 'default'
  }

const BadgeStyled = styled(Text)<Props>`
  display: inline-flex;
  align-items: center;

  &.__badge-default {
    padding: 1px 8px;
    margin-right: 16px;
    border-radius: 12px;
    width: fit-content;
    font-size: 14px;

    ${color}
    ${space}
    ${border}
    ${layout}
    ${fontSize}
    ${fontWeight}
  }

  &.__badge-label {
    text-align: center;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 14px;
    width: fit-content;
    font-weight: ${({ theme }) => theme.fontWeights.medium};

    ${color}
    ${space}
    ${border}
    ${layout}
    ${fontSize}
    ${fontWeight}
  }

  ${color}
  ${space}
  ${border}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

const getCounter = (value, overflow) => {
  if (value >= 0) {
    if (overflow && !isNaN(value) && value > overflow) {
      return (
        <Tooltip data-testid='badge-tooltip' body={value} variant='bottomRight'>
          <span>{`${overflow}+`}</span>
        </Tooltip>
      )
    }

    return value.toString()
  }

  return ''
}

export const Badge = React.forwardRef<HTMLSpanElement, Props>(
  ({ count, variant, children, overflowCount, className, ...props }, ref) => {
    const findClassName = useCallback(() => {
      switch (variant) {
        case 'label':
          return '__badge-label'

        default:
          return '__badge-default'
      }
    }, [variant])

    return (
      <BadgeStyled
        data-testid='badge'
        className={`${className} ${findClassName()}`}
        ref={ref}
        {...props}
      >
        {getCounter(count, overflowCount) || children}
      </BadgeStyled>
    )
  }
)

Badge.defaultProps = {
  variant: 'default',
  color: '#262626',
  backgroundColor: '#dedede'
}
