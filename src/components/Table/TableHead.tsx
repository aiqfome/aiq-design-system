import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import {
  space,
  layout,
  typography,
  ColorProps,
  SpaceProps,
  LayoutProps,
  TypographyProps
} from 'styled-system'

export interface Props
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    TypographyProps {
  children?: any
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

export const TableHead: React.FC = ({ children, ...props }) => {
  return <TableHeaderStyled {...props}>{children}</TableHeaderStyled>
}

TableHead.propTypes = {
  children: PropTypes.node
}
