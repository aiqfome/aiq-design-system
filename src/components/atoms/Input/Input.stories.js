import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Input } from './Input'

export default {
  component: Input,
  title: atomicDir(base)
}

export const basic = () => <Input value="teste" />
