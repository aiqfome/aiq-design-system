import React from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import PropTypes from 'prop-types'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  border,
  BorderProps,
  position,
  FlexProps,
  flex,
  PositionProps,
  flexbox,
  FlexboxProps,
  textAlign,
  TextAlignProps
} from 'styled-system'

export interface Props
  extends SpaceProps,
    DefaultTheme,
    LayoutProps,
    FontSizeProps,
    FontWeightProps,
    PositionProps,
    ColorProps,
    FlexProps,
    FlexboxProps,
    BorderProps,
    TextAlignProps {
  variant?: 'auto' | 'centralized' | 'fullCentralized'
  color?: string
  fullHeight?: boolean
  children?: any
  className?: string
  onClick?: (e: any) => void
  onDragOver?: (e: any) => void
  onDragEnter?: (e: any) => void
  onDragLeave?: (e: any) => void
  onDragEnd?: (e: any) => void
  onDrop?: (e: any) => void
  style?: any
}

const flexVariations: { [index: string]: any } = {
  auto: css``,
  centralized: css`
    justify-content: center;
    align-items: center;
  `,
  fullCentralized: css`
    justify-content: center;
    align-items: center;
    height: 100vh;
  `
}

const FlexStyled = styled.div<Props>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${border}
  ${position}
  ${color}
  ${flexbox}
  ${flex}
  ${textAlign}

  display: flex;
  ${({ variant }) => flexVariations[variant || 'auto']}

  ${({ fullHeight }) =>
    !!fullHeight &&
    css`
      height: 100vh;
    `}

  ${layout}
`

export const Flex = React.forwardRef<HTMLDivElement, Props>(
  ({ children, color, ...props }, ref) => {
    return (
      <FlexStyled data-testid='flex' ref={ref} color={color} {...props}>
        {children}
      </FlexStyled>
    )
  }
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}
