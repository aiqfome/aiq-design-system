import React from 'react'

import { Flex, Props } from '../Flex'
import { Loading } from '../Loading'

export const LoaderBox = React.forwardRef<SVGSVGElement, Props>(
  ({ ...props }, ref) => (
    <Flex justifyContent='center' alignItems='center' height='100vh' {...props}>
      <Loading ref={ref} />
    </Flex>
  )
)
