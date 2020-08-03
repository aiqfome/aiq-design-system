import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Text } from '../Text'
import { Drawer } from './Drawer'

export default {
  component: Drawer,
  title: 'atoms/Drawer',
  decorators: [withKnobs]
}

export const basic: React.FC = () => (
  <Drawer
    opened={boolean('opened', true)}
    variation={select('variation', { Right: 'right', Left: 'left' }, 'right')}
  >
    <Text>{text('text', 'Design System')}</Text>
  </Drawer>
)

export const left: React.FC = () => (
  <Drawer opened={true} variation='left'>
    <Text>Design System</Text>
  </Drawer>
)

export const right: React.FC = () => (
  <Drawer opened={true} variation='right'>
    <Text>Design System</Text>
  </Drawer>
)
