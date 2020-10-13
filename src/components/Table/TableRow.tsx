import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

export interface TableRowProps {
  expanded?: boolean
  children: ReactNode
  hoverable?: boolean
  hasAction?: boolean
}

const TableRowStyled = styled.tr<TableRowProps>`
  cursor: default;
  vertical-align: middle;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};

  ${({ hasAction }) =>
    hasAction &&
    css`
      cursor: pointer;
    `}

  ${({ expanded }) =>
    expanded &&
    css`
      cursor: default;
      background-color: ${({ theme }) => theme.colors.lightGrey};
    `}

  ${({ hoverable }) =>
    hoverable &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrey};
      }
    `}
`

export const TableRow: React.FC<TableRowProps> = ({
  children,
  hoverable,
  ...props
}) => {
  return (
    <TableRowStyled hoverable={hoverable} {...props}>
      {children}
    </TableRowStyled>
  )
}

TableRow.defaultProps = {
  hoverable: true
}

TableRow.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.node,
  hasAction: PropTypes.bool,
  hoverable: PropTypes.bool
}
