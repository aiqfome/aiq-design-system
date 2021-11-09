import React from 'react'

import { Flex } from '../Flex'
import { Loading } from '../Loading'

type LoaderBoxProps = React.HTMLAttributes<HTMLDivElement>

export const LoaderBox: React.FC<LoaderBoxProps> = ({ ...props }) => (
  <Flex justifyContent='center' alignItems='center' height='100vh' {...props}>
    <Loading />
  </Flex>
)
