import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Flex } from '../../atoms/Flex'

const TableRowStyled = styled(Flex)`
  justify-content: space-between;
  padding: 20px 0;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};

  &:last-child {
    border-bottom: none;
  }
`

export const TableRow: React.FC = ({ children, ...props }) => {
  return <TableRowStyled {...props}>{children}</TableRowStyled>
}

TableRow.propTypes = {
  children: PropTypes.node
}
