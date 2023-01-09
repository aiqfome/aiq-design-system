import React from 'react'

import { Flex, Props } from '../Flex'
import { Loading } from '../Loading'

export const LoaderBox: React.FC = ({ ...props }: Props) => (
  <Flex justifyContent='center' alignItems='center' height='100vh' {...props}>
    <Loading />
  </Flex>
)
