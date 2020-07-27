import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Text } from './Text'

export default {
  component: Text,
  title: atomicDir(base)
}

export const basic = () => <Text>Design System</Text>

export const cursor = () => <Text cursor="pointer">Design System</Text>
