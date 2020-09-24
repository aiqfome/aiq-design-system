import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from '../Flex'

export const TableBody: React.FC = ({ children, ...props }) => {
  return (
    <Flex flexDirection='column' {...props}>
      {children}
    </Flex>
  )
}

TableBody.propTypes = {
  children: PropTypes.node
}
