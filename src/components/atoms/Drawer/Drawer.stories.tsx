import React from 'react'

import { Text } from '../Text'
import { Drawer } from './Drawer'

export default {
  component: Drawer,
  title: 'atoms/Drawer'
}

export const basic: React.FC = () => <Drawer opened={true} />

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
