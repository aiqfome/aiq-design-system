import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  color,
  space,
  SpaceProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

export type Props = SpaceProps &
  LayoutProps &
  FontSizeProps &
  GridProps &
  FontWeightProps &
  HTMLAttributes<HTMLDivElement> & {
    color?: string
    children?: any
  }

export const GridStyled = styled.div<Props>`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${grid}

  display: grid;
`

export const Grid = React.forwardRef<HTMLDivElement, Props>(
  ({ ...props }, ref) => {
    return <GridStyled {...props} ref={ref} />
  }
)
