import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Flex } from '../../atoms/Flex'

export interface TableCellProps {
  flex?: number
  children: ReactNode
}

const TableCellStyled = styled(Flex)`
  padding: 0 10px;
  font-size: medium;
  justify-content: start;
`

export const TableCell: React.FC<TableCellProps> = ({
  children,
  flex,
  ...props
}) => {
  return (
    <TableCellStyled flex={flex} {...props}>
      {children}
    </TableCellStyled>
  )
}

TableCell.propTypes = {
  children: PropTypes.node,
  flex: PropTypes.number
}
