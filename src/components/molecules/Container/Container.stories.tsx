import React, { ReactElement } from 'react'

import { Flex } from '../../atoms/Flex'
import { Text } from '../../atoms/Text'

import { Container } from './Container'

export default {
  component: Container,
  title: 'molecules/Container'
}

export const Basic: React.FC = (): ReactElement => (
  <Container title='Just a container!'>
    <Flex variant='centralized' p={15}>
      <Text>my content (:</Text>
    </Flex>
  </Container>
)
