import React from 'react'

import { Flex } from '../../atoms/Flex'
import { Pagination } from './Pagination'

export default {
  component: Pagination,
  title: 'molecules/Pagination'
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
        <Pagination count={10} size='default' />
      </Flex>

      <Flex variant='centralized'>
        <Pagination count={10} size='large' />
      </Flex>
    </>
  )
}
