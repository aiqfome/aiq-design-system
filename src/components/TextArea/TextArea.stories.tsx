import React from 'react'

import { Flex } from '../Flex'
import { TextArea } from './TextArea'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'name',
  'value',
  'sufix',
  'containerProps',
  'disabled',
  'maxWith',
  'backgroundColor',
  'nativeAutoComplete',
  'errorForm',
  'errorMessage'
]

export default createPageExport(TextArea, 'TextArea', aiqProps, {
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    backgroundColor: { control: 'text' },
    disabled: { control: 'boolean' },
    nativeAutoComplete: { control: 'select', options: ['on', 'disabled'] },
    errorForm: { control: 'boolean' },
    errorMessage: { control: 'text' }
  }
})

export const Basic = args => (
  <Flex variant='fullCentralized'>
    <TextArea {...args} />
  </Flex>
)
Basic.args = {
  placeholder: 'duas pizzas é muito',
  value: ''
}

export const Error = args => {
  return (
    <Flex variant='fullCentralized' flexDirection='column' gap='12px'>
      <TextArea {...args} />
    </Flex>
  )
}
Error.args = {
  placeholder: 'duas pizzas é muito',
  value: '',
  errorMessage: 'campo obrigatório',
  errorForm: true
}
