import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Text } from '../Text';
import { Drawer } from './Drawer'

export default {
  component: Drawer,
  title: atomicDir(base)
}

export const basic = () => <Drawer />

export const left = () => (
  <Drawer  opened={true} variation='left' >
    <Text>Design System</Text>
  </Drawer>
)

export const right = () => (
  <Drawer  opened={true} variation='right' >
    <Text>Design System</Text>
  </Drawer>
)