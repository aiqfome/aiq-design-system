import React from 'react'

import styled from 'styled-components'
import { color, space, layout } from 'styled-system'

import { Flex, Props as FlexProps } from '../Flex'

export interface Props extends FlexProps {
  cursor?: string
  children?: any
}

export const IconStyled = styled(Flex)<Props>`
  ${color}
  ${space}
  ${layout}

  cursor: ${props => props.cursor};

  align-items: center;
`

export const Icon: React.FC<Props> = ({ children, ...props }) => {
  return <IconStyled {...props}>{children}</IconStyled>
}
