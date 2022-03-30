import React from 'react'

import styled from 'styled-components'

import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  space,
  position,
  PositionProps,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  flexbox,
  FlexboxProps
} from 'styled-system'

export interface Props
  extends BorderProps,
    BoxShadowProps,
    BackgroundProps,
    ColorProps,
    FlexboxProps,
    FontSizeProps,
    FontWeightProps,
    LayoutProps,
    PositionProps,
    SpaceProps {
  background?: string
  children?: any
  className?: string
  color?: string
  onClick?: any
  refBox?: any
}

export const BoxStyled = styled.div`
  ${background}
  ${border}
  ${boxShadow}
  ${color}
  ${flexbox}
  ${fontSize}
  ${fontWeight}
  ${layout}
  ${position}
  ${space}
`

export const Box: React.FC<Props> = ({ refBox, ...props }) => {
  return <BoxStyled data-testid='box' ref={refBox} {...props} />
}
