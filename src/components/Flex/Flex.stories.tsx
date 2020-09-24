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
    flexDirection={select(
      'flexDirection',
      { Row: 'row', Column: 'column' },
      'row'
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
