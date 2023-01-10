import React from 'react'

import { Radio } from './Radio'
import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'name',
  'value',
  'variant',
  'disabled',
  'label',
  'checked',
  'theme'
]

export default createPageExport(Radio, 'Radio', aiqProps, {
  argTypes: {
    name: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['default', 'small']
    }
  }
})

export const Basic = args => (
  <Flex>
    <Radio mx={10} name='radioBasic' {...args} />
    <Radio name='radioBasic' value='02' />
  </Flex>
)
Basic.args = {
  value: '01',
  disabled: false,
  checked: true
}

export const Disabled = args => (
  <Flex>
    <Radio mx={10} {...args} />
  </Flex>
)
Disabled.args = {
  value: '01',
  disabled: true,
  name: 'radioDisabled'
}

export const Checked = args => (
  <Flex>
    <Radio mx={10} {...args} />
  </Flex>
)
Checked.args = {
  value: '01',
  checked: true,
  name: 'radioChecked'
}

export const CheckedDisabled = args => (
  <Flex>
    <Radio mx={10} {...args} />
  </Flex>
)
CheckedDisabled.args = {
  value: '01',
  checked: true,
  disabled: true,
  name: 'radioCheckedDisabled'
}

export const Label = args => (
  <Flex>
    <Radio mx={10} name='radio' {...args} />
    <Radio mx={10} checked={false} label='fome' name='radio' value='fome' />
  </Flex>
)
Label.args = {
  checked: true,
  label: 'aiq',
  value: 'aiq'
}

export const LabelComponent: React.FC = () => (
  <Flex>
    <Radio
      mx={10}
      checked={false}
      label={<Flex>aiqfome</Flex>}
      name='radio'
      value='aiq'
    />
  </Flex>
)

export const Sizes: React.FC = () => (
  <Flex>
    <Radio
      mx={10}
      variant='default'
      label='default'
      checked={false}
      name='radio1'
      value='default'
    />
    <Radio
      mx={10}
      checked={true}
      variant='small'
      label='small'
      name='radio2'
      value='small'
    />
  </Flex>
)
