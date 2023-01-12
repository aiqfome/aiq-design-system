import React from 'react'

import styled from 'styled-components'
import { color, space, layout } from 'styled-system'

import { Flex, Props as FlexProps } from '../Flex'

export type Props = FlexProps & {
  cursor?: string
}

const IconStyled = styled(Flex)<Props>`
  ${color}
  ${space}
  ${layout}

  cursor: ${props => props.cursor};
`

export const Icon = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <IconStyled ref={ref} {...props}>
        {children}
      </IconStyled>
    )
  }
)

Icon.defaultProps = {
  alignItems: 'center'
}
