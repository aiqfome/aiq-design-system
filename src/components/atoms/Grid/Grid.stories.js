import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Grid } from './Grid'

export default {
  component: Grid,
  title: atomicDir(base)
}

export const basic = () => <Grid />
