import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

export interface TableRowProps {
  expanded?: boolean
  className?: string
  children: ReactNode
  hoverable?: boolean
  hasAction?: boolean
  background?: string
}

const TableRowStyled = styled.tr<TableRowProps>`
  cursor: default;
  vertical-align: middle;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  background: ${({ theme, background }) =>
    theme.colors[background || '']} !important;

  &.expanded-father {
    border-bottom: none;
  }

  ${({ hasAction }) =>
    hasAction &&
    css`
      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.lightGrey};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.grey};
        opacity: 0.7;
      }
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
  background,
  ...props
}) => {
  return (
    <TableRowStyled
      hoverable={hoverable}
      data-testid='table-row'
      background={background || ''}
      {...props}
    >
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
  hoverable: PropTypes.bool,
  background: PropTypes.string
}
