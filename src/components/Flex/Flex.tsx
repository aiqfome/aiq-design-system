import React from 'react'
import styled, { DefaultTheme, css } from 'styled-components'
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
  shadow,
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
  isClickable?: boolean
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
  ${shadow}

  display: flex;

  &.__flex-variant-centralized {
    justify-content: center;
    align-items: center;
  }

  &.__flex-variant-fullCentralized {
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  &.__flex-fullHeight {
    height: 100vh;
  }

  ${layout}

  ${({ isClickable }) =>
    isClickable &&
    css`
      &:active {
        opacity: 0.8;
        user-select: none;
      }
    `}
`

export const Flex = React.forwardRef<HTMLDivElement, Props>(
  (
    { children, color, variant = 'auto', fullHeight, className, ...props },
    ref
  ) => {
    return (
      <FlexStyled
        data-testid='flex'
        className={`${className} __flex-variant-${variant} ${
          fullHeight && '__flex-fullHeight'
        }`}
        ref={ref}
        color={color}
        {...props}
      >
        {children}
      </FlexStyled>
    )
  }
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['auto', 'centralized', 'fullCentralized']),
  fullHeight: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}
