import React from 'react'

import styled from 'styled-components'

import {
  space,
  layout,
  typography,
  SpaceProps,
  LayoutProps,
  TypographyProps
} from 'styled-system'

export type Props = SpaceProps &
  LayoutProps &
  TypographyProps & {
    children?: any
    wrap?: any
  }

const TableHeaderStyled = styled.th<Props>`
  flex: 1;
  text-align: left;
  align-items: flex-end;
  padding: 20px 10px 3px;
  vertical-align: bottom;
  border-collapse: collapse;
  border-bottom: 0.5px solid;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkGrey};
  border-color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${layout}
  ${space}
  ${typography}
`

export const TableHead: React.FC<Props> = ({ children, ...props }) => {
  return (
    <TableHeaderStyled data-testid='table-head' {...props}>
      {children}
    </TableHeaderStyled>
  )
}
