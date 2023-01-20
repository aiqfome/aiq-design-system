import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import { Flex } from './Flex'
import { Text } from '../Text'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['variant', 'isClickable', 'color', 'children', 'fullHeight']

export default createPageExport(Flex, 'Flex', aiqProps, {
  argTypes: {
    variant: {
      control: 'select',
      options: ['auto', 'centralized', 'fullCentralized']
    },
    isClickable: { control: 'boolean' },
    fullHeight: { control: 'boolean' }
  }
})

export const Basic = args => (
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
    {...args}
  >
    <Text>Flex!</Text>
  </Flex>
)
Basic.args = {
  variant: 'centralized'
}

export const Centralized = args => (
  <Flex variant='centralized' {...args}>
    <Text>Flex!</Text>
  </Flex>
)
Centralized.args = {
  variant: 'centralized'
}

export const FullCentralized = args => (
  <Flex variant='fullCentralized' {...args}>
    <Text>Flex!</Text>
  </Flex>
)
FullCentralized.args = {
  variant: 'fullCentralized'
}

export const FlexFullHeight = args => (
  <Flex {...args}>
    <Text>Flex!</Text>
  </Flex>
)
FlexFullHeight.args = {
  fullHeight: true
}

export const Row = args => (
  <Flex flexDirection='row' {...args}>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
  </Flex>
)

export const Column = args => (
  <Flex flexDirection='column' {...args}>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
    <Text>Flex!</Text>
  </Flex>
)
