import React, { CSSProperties, HTMLAttributes } from 'react'

import styled, { DefaultTheme, css } from 'styled-components'

import {
  background,
  BackgroundProps,
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

type GapProps = Pick<CSSProperties, 'gap' | 'columnGap' | 'rowGap'>

export type Props = BackgroundProps &
  SpaceProps &
  DefaultTheme &
  LayoutProps &
  FontSizeProps &
  FontWeightProps &
  PositionProps &
  ColorProps &
  FlexProps &
  FlexboxProps &
  BorderProps &
  TextAlignProps &
  GapProps &
  HTMLAttributes<HTMLDivElement> & {
    variant?: 'auto' | 'centralized' | 'fullCentralized'
    isClickable?: boolean
    color?: string
    fullHeight?: boolean
    children?: any
  }

const FlexStyled = styled.div<Props>`
  ${background}
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

    ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}

    ${({ columnGap }) =>
    columnGap &&
    css`
      column-gap: ${columnGap};
    `}

    ${({ rowGap }) =>
    rowGap &&
    css`
      row-gap: ${rowGap};
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
