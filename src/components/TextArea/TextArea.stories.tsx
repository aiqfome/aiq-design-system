import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { TextArea } from './TextArea'

import { createPageExport } from '../../utils/storybook'
import { backgroundColor } from 'styled-system'

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
