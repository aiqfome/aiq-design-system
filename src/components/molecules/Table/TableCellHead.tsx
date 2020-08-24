import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Flex } from '../../atoms/Flex'

const TableCellHeadStyled = styled(Flex)`
  padding: 0 10px;
  color: grey;
  font-size: small;
  flex: 1;
`

export const TableCellHead: React.FC = ({ children, ...props }) => {
  return <TableCellHeadStyled {...props}>{children}</TableCellHeadStyled>
}

TableCellHead.propTypes = {
  children: PropTypes.node
}
