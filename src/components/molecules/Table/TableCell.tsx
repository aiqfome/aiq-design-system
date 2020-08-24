import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Flex } from '../../atoms/Flex'

const TableCellStyled = styled(Flex)`
  padding: 0 10px;
  font-size: medium;
  justify-content: start;
  flex: 1;
`

export const TableCell: React.FC = ({ children, ...props }) => {
  return <TableCellStyled {...props}>{children}</TableCellStyled>
}

TableCell.propTypes = {
  children: PropTypes.node
}
