import React from 'react'

import { Flex, Props } from '../Flex'
import { Loading } from '../Loading'

export const LoaderBox = React.forwardRef<HTMLDivElement, Props>(
  ({ ...props }, ref) => (
    <Flex
      justifyContent='center'
      alignItems='center'
      height='100vh'
      {...props}
      ref={ref}
    >
      <Loading />
    </Flex>
  )
)
