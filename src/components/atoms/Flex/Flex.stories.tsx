import React from 'react'

import { Flex } from './Flex'
import { Text } from '../Text'

export default {
  component: Flex,
  title: 'atoms/Flex'
}

export const basic: React.FC = () => (
  <Flex>
    <Text>Flex!</Text>
  </Flex>
)

export const centralized: React.FC = () => (
  <Flex variant='centralized'>
    <Text>Flex!</Text>
  </Flex>
)

export const fullCentralized: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Text>Flex!</Text>
  </Flex>
)
