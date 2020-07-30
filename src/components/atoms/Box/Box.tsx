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
  color?: string
  children?: any
}

export const BoxStyled = styled.div`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

export const RefBox: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { ...props },
  ref
) => {
  return <BoxStyled ref={ref} {...props} />
}

export const Box = forwardRef(RefBox)
