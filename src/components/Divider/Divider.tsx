import React from 'react'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps
} from 'styled-system'
import styled from 'styled-components'

import { Flex } from '../Flex'

export type Props = SpaceProps &
  ColorProps &
  LayoutProps & {
    children?: any
    color?: string
  }

const LineStyled = styled.hr<Props>`
  ${layout}
  ${space}
  ${color}
  border: none;
`
export const Divider = React.forwardRef<HTMLDivElement, Props>(
  ({ children, height = '1px', color = 'mediumGrey', ...props }, ref) => {
    if (children) {
      return (
        <Flex
          data-testid='divider-wrapper'
          width='100%'
          alignItems='center'
          justifyContent='center'
          ref={ref}
        >
          <LineStyled height={height} backgroundColor={color} {...props} />
          {children}
          <LineStyled height={height} backgroundColor={color} {...props} />
        </Flex>
      )
    }

    return <LineStyled height={height} backgroundColor={color} {...props} />
  }
)
