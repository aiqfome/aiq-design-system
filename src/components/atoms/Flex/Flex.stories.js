import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'


import { Flex } from './Flex'
import {Text} from '../Text'

export default {
  component: Flex,
  title: atomicDir(base)
}

export const basic = () => <Flex><Text>Flex!</Text></Flex>

export const centralized = () => <Flex variant="centralized" ><Text>Flex!</Text></Flex>

export const fullCentralized = () => <Flex variant="fullCentralized" ><Text>Flex!</Text></Flex>
