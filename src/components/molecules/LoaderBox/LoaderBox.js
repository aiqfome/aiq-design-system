import React from 'react'

import { Flex } from '../../atoms/Flex'
import { Loading } from '../../atoms/Loading'

export const LoaderBox = () => (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <Loading />
  </Flex>
)

LoaderBox.propTypes = {}

LoaderBox.defaultProps = {}
