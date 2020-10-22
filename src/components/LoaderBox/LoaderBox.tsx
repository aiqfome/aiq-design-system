import React from 'react'

import { Flex } from '../Flex'
import { Loading } from '../Loading'

export const LoaderBox: React.FC = ({ ...props }) => (
  <Flex justifyContent='center' alignItems='center' height='100vh' {...props}>
    <Loading />
  </Flex>
)
