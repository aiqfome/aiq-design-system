import React from 'react'

import { Loading } from './Loading'
import { Flex } from '../Flex'

export default {
  component: Loading,
  title: 'atoms/Loading'
}

export const basic: React.FC = () => (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <Loading />
  </Flex>
)
