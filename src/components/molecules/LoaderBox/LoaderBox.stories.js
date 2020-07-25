import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { LoaderBox } from './LoaderBox'

export default {
  component: LoaderBox,
  title: atomicDir(base)
}

export const basic = () => <LoaderBox />
