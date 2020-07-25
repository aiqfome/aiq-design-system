import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'


import { Flex } from './Flex'

export default {
  component: Flex,
  title: atomicDir(base)
}

export const basic = () => <Flex>Flex!</Flex>
