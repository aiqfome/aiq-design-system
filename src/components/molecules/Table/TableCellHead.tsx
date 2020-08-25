import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Flex } from '../../atoms/Flex'

export interface TableCellHeadProps {
  flex?: number
  children: ReactNode
}

const TableCellHeadStyled = styled(Flex)`
  padding: 0 10px;
  color: grey;
  font-size: small;
`

export const TableCellHead: React.FC<TableCellHeadProps> = ({
  children,
  flex,
  ...props
}) => {
  return (
    <TableCellHeadStyled flex={flex} {...props}>
      {children}
    </TableCellHeadStyled>
  )
}

TableCellHead.propTypes = {
  children: PropTypes.node,
  flex: PropTypes.number
}
