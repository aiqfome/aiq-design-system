import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Drawer } from './Drawer'

export default {
  component: Drawer,
  title: atomicDir(base)
}

export const basic = () => <Drawer />
