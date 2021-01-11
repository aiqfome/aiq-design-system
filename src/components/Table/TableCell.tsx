import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import {
  space,
  layout,
  typography,
  ColorProps,
  SpaceProps,
  LayoutProps,
  TypographyProps
} from 'styled-system'

export interface Props {
  colspan?: number
  children: ReactNode
  wrap?: boolean | undefined | null
}

export interface TableCellProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    TypographyProps {
  children: ReactNode
  wrap?: boolean | undefined | null | number
}

const TableCellStyled = styled.td<TableCellProps>`
  padding: 12px 10px;
  font-size: medium;

  ${({ wrap }) =>
    wrap &&
    css`
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${layout}
  ${space}
  ${typography}
`

export const TableCell: React.FC<Props> = ({
  children,
  colspan,
  wrap = false,
  ...props
}) => {
  return (
    <TableCellStyled
      colSpan={colspan}
      wrap={wrap ? 1 : 0}
      data-testid='table-cell'
      {...props}
    >
      {children}
    </TableCellStyled>
  )
}

TableCell.propTypes = {
  wrap: PropTypes.bool,
  children: PropTypes.node,
  colspan: PropTypes.number
}
