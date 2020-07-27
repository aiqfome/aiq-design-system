import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Box } from './Box'

export default {
  component: Box,
  title: atomicDir(base)
}

export const basic = () => <Box color="blue">Design System</Box>
