import React from 'react'

import { Flex } from '../Flex'
import { Pagination } from './Pagination'

export default {
  component: Pagination,
  title: 'Pagination'
}

export const Basic: React.FC = () => {
  return <Pagination count={10} />
}

export const WithZeroPages: React.FC = () => {
  return <Pagination count={0} />
}

export const WithOnePages: React.FC = () => {
  return <Pagination count={1} />
}

export const Disabled: React.FC = () => {
  return <Pagination disabled count={10} />
}

export const Sizes: React.FC = () => {
  return (
    <>
      <Flex mb='20px' variant='centralized'>
        <Pagination count={10} size='small' />
      </Flex>

      <Flex mb='20px' variant='centralized'>
        <Pagination count={10000} size='default' />
      </Flex>

      <Flex variant='centralized'>
        <Pagination count={10} size='large' />
      </Flex>
    </>
  )
}

export const Variants: React.FC = () => {
  return (
    <>
      <Flex variant='centralized' mb='20px'>
        <Pagination variant='noCount' size='large' />
      </Flex>

      <Flex variant='centralized'>
        <Pagination count={100} size='large' />
      </Flex>
    </>
  )
}
