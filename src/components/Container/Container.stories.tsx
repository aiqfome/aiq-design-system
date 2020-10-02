import React, { ReactElement, useState } from 'react'

import { Button } from '../Button'
import { Flex } from '../Flex'
import { Input } from '../Input'
import { Text } from '../Text'

import { Container } from './Container'
import { TabPanel } from '../Tab'

export default {
  component: Container,
  title: 'Container'
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

export const WithTabs: React.FC = (): ReactElement => {
  const [tabIndex, setTabIndex] = useState(0)

  const tabs = [
    {
      index: 0,
      content: 'pizza'
    },
    {
      index: 1,
      content: 'burguer'
    }
  ]

  const onChange = (_, index) => {
    setTabIndex(index)
  }

  return (
    <Container
      tabs={tabs}
      tabIndex={tabIndex}
      onChangeTab={onChange}
      tabsExtra='conteúdo extra'
    >
      <TabPanel value={tabIndex} index={0}>
        <Flex variant='centralized' flex={1} p={15}>
          <Text>aqui tem pizza</Text>
        </Flex>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <Flex variant='centralized' flex={1} p={15}>
          <Text>aqui tem vários burguers</Text>
        </Flex>
      </TabPanel>
    </Container>
  )
}
