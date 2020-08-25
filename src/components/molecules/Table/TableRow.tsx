import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

import { Flex } from '../../atoms/Flex'

export interface TableRowProps {
  hoverable?: boolean
  children: ReactNode
}

const TableRowStyled = styled(Flex)<TableRowProps>`
  justify-content: space-between;
  padding: 20px 0;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  flex: 1;

  &:last-child {
    border-bottom: none;
  }

  ${({ hoverable, theme }) =>
    hoverable &&
    css`
      &:hover {
        background: ${theme.colors.lightGrey};
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

TableRow.propTypes = {
  children: PropTypes.node,
  hoverable: PropTypes.bool
}
