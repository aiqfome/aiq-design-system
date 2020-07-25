import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Icon } from './Icon'

export default {
  component: Icon,
  title: atomicDir(base)
}

export const basic = () => <Icon />
