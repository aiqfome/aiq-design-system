import React from 'react'
import { text, number, color } from '@storybook/addon-knobs'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Divider } from './Divider'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['children', 'color', 'height']

export default createPageExport(Divider, 'Divider', aiqProps, {
  argTypes: {
    height: { control: 'number' }
  }
})

export const Basic: React.FC = args => (
  <Flex width={text('width', '100%')}>
    <Divider width={text('width', '100%')} {...args} />
  </Flex>
)

export const withChildren: React.FC = args => (
  <Divider
    width={text('width', '100%')}
    color={color('color', 'primary')}
    {...args}
  >
    <Text paddingRight={10} paddingLeft={10}>
      Aiqfome!
    </Text>
  </Divider>
)

export const Height: React.FC = args => (
  <Divider
    margin={10}
    height={number('height', 5)}
    color={color('color', 'secondary')}
    {...args}
  />
)
