import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '../../atoms/Text'
import { Flex } from '../../atoms/Flex'

export const Badge = ({ children }) => {
  return (
    <Flex
      backgroundColor='#ff4d4f'
      variant='centralized'
      padding='1px 8px'
      marginRight='16px'
      borderRadius='12px'
    >
      <Text fontSize='small' color='white'>
        {children}
      </Text>
    </Flex>
  )
}

Badge.propTypes = {
  children: PropTypes.any
}
