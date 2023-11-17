import React, { useState } from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { TextArea } from './TextArea'

import { createPageExport } from '../../utils/storybook'
import { backgroundColor } from 'styled-system'
import { Button } from '../Button'

const aiqProps = [
  'name',
  'value',
  'sufix',
  'containerProps',
  'disabled',
  'maxWith',
  'backgroundColor',
  'nativeAutoComplete'
]

export default createPageExport(TextArea, 'TextArea', aiqProps, {
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    backgroundColor: { control: 'text' },
    disabled: { control: 'boolean' },
    errorForm: { control: 'boolean' },
    errorMessage: { control: 'string' },
    nativeAutoComplete: { control: 'select', options: ['on', 'disabled'] }
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
