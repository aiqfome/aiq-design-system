import React, { ReactElement } from 'react'

import { Button } from '../../atoms/Button'
import { Flex } from '../../atoms/Flex'
import { Input } from '../../atoms/Input'
import { Text } from '../../atoms/Text'

import { Container } from './Container'

export default {
  component: Container,
  title: 'molecules/Container'
}

export const Basic: React.FC = (): ReactElement => (
  <Container>
    <Flex variant='centralized' p={15}>
      <Text>my content (:</Text>
    </Flex>
  </Container>
)

export const WithTitle: React.FC = (): ReactElement => (
  <Container title='Just a container!'>
    <Flex variant='centralized' p={15}>
      <Text>my content (:</Text>
    </Flex>
  </Container>
)

export const WithHeader: React.FC = (): ReactElement => {
  const Header: React.FC = (): ReactElement => (
    <Flex justifyContent='space-between' p={10}>
      <Text color='almostBlack' fontSize='xxlarge'>
        Just a title
      </Text>
      <Flex>
        <Input placeholder='value' />

        <Button ml={5} variant='contained' palette='primary'>
          Filtrar
        </Button>
      </Flex>
    </Flex>
  )

  return (
    <Container header={<Header />}>
      <Flex variant='centralized' p={15}>
        <Text>my content (:</Text>
      </Flex>
    </Container>
  )
}
