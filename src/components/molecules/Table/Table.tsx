import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../../atoms/Box'

export const Table: React.FC = ({ children }) => {
  return <Box width={1}>{children}</Box>
}

Table.propTypes = {
  children: PropTypes.node
}
