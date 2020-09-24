import React from 'react'
import { withKnobs, text, number, color } from '@storybook/addon-knobs'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Divider } from './Divider'

export default {
  component: Divider,
  title: 'Divider',
  decorators: [withKnobs as any]
}

export const Basic: React.FC = () => (
  <Flex width={text('width', '100%')}>
    <Divider width={text('width', '100%')} />
  </Flex>
)

export const withChildren: React.FC = () => (
  <Divider width={text('width', '100%')} color={color('color', 'primary')}>
    <Text paddingRight={10} paddingLeft={10}>
      Aiqfome!
    </Text>
  </Divider>
)

export const Height: React.FC = () => (
  <Divider
    margin={10}
    height={number('height', 5)}
    color={color('color', 'secondary')}
  />
)
