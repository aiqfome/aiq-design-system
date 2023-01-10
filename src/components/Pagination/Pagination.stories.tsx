import React from 'react'

import { Flex } from '../Flex'
import { Pagination } from './Pagination'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'count',
  'color',
  'disabled',
  'variant',
  'size',
  'defaultPage',
  'page',
  'nextPage',
  'prevPage',
  'onChange'
]

export default createPageExport(Pagination, 'Pagination', aiqProps, {
  argTypes: {
    count: { control: 'number' },
    defaultPage: { control: 'number' },
    page: { control: 'number' },
    color: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['default', 'noCount']
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'large']
    }
  }
})

export const Basic = args => {
  return <Pagination {...args} />
}
Basic.args = {
  count: 10
}

export const WithZeroPages = args => {
  return <Pagination {...args} />
}
WithZeroPages.args = {
  count: 0
}

export const WithOnePages = args => {
  return <Pagination {...args} />
}
WithOnePages.args = {
  count: 1
}

export const Disabled = args => {
  return <Pagination {...args} />
}
Disabled.args = {
  count: 10,
  disabled: true
}

export const Sizes = () => {
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

export const Variants = args => {
  function onChangePage(page) {
    console.log(page)
  }
  return (
    <>
      <Flex variant='centralized' mb='20px'>
        <Pagination onChange={onChangePage} {...args} />
      </Flex>

      <Flex variant='centralized'>
        <Pagination count={8} size='large' onChange={onChangePage} />
      </Flex>
    </>
  )
}
Variants.args = {
  variant: 'noCount',
  size: 'large'
}
