import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import { Flex } from './Flex'
import { Text } from '../Text'

export default {
  component: Flex,
  title: 'Flex',
  decorators: [withKnobs]
}

export const basic: React.FC = () => (
  <Flex
    justifyContent={select(
      'justifyContent',
      { FlexStart: 'flex-start', FlexEnd: 'flex-end', Center: 'center' },
      'flex-start'
    )}
    alignItems={select(
      'alignItems',
      { FlexStart: 'flex-start', FlexEnd: 'flex-end', Center: 'center' },
      'flex-start'
    )}
    backgroundColor={text('backgroundColor', '#fff')}
    variant={select(
      'Variant',
      { Centralized: 'centralized', FullCentralized: 'fullCentralized' },
      'centralized'
    )}
  >
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

export const flexFullHeight: React.FC = () => (
  <Flex fullHeight={true}>
    <Text>Flex!</Text>
  </Flex>
)

export const Row: React.FC = () => (
  <Flex flexDirection='row'>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
  </Flex>
)

export const Column: React.FC = () => (
  <Flex flexDirection='column'>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
  </Flex>
)
