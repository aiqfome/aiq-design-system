import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Avatar } from './Avatar'

export default {
  component: Avatar,
  title: atomicDir(base)
}

export const basic = () => <Avatar />
