import React, { ForwardRefRenderFunction, forwardRef, ReactNode } from 'react'

import styled from 'styled-components'
import {
  color,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

export interface Props
  extends SpaceProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  children?: ReactNode
  color?: string
}

export const BoxStyled = styled.div`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

export const BoxComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, ...props },
  ref
) => {
  return (
    <BoxStyled ref={ref} {...props}>
      {children}
    </BoxStyled>
  )
}

export const Box = forwardRef(BoxComponent)
