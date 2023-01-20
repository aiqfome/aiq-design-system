import React from 'react'

import { Loading, Props } from './Loading'
import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'

export const Basic = (args: Props) => (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <Loading {...args} />
  </Flex>
)
Basic.args = {
  variant: 'small'
}

export default createPageExport(Basic, 'Loading', ['color', 'size'], {
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'big']
    },
    color: {
      control: 'text'
    }
  }
})
