import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'

export interface Props {
  children?: ReactNode
  statusColor?: string
}

const StatusStyled = styled(Text)<Props>`
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: ${({ statusColor, theme }) =>
      statusColor ? theme.colors[statusColor] : '#dedede'};
  }
`

export const Status: React.FC<Props> = ({ children, ...props }) => {
  return <StatusStyled {...props}>{children}</StatusStyled>
}
