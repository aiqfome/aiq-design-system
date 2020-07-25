import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Loading } from './Loading'
import { Flex } from '../Flex'

export default {
  component: Loading,
  title: atomicDir(base)
}

export const basic = () => (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <Loading />
  </Flex>
)
