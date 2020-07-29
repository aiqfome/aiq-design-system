import React from 'react'

import { Flex } from '../../atoms/Flex'
import { Loading } from '../../atoms/Loading'

export const LoaderBox: React.FC = () => (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <Loading />
  </Flex>
)
