import React, { ReactElement, useState } from 'react'

import { Flex } from '../Flex'
import { Switch } from './Switch'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['checked', 'disabled', 'variant']

export default createPageExport(Switch, 'Switch', aiqProps, {
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    variant: { control: 'select', options: ['default', 'small'] }
  }
})

export const Basic = (args): ReactElement => {
  const [checked, setChecked] = useState(false)

  return (
    <Flex variant='fullCentralized'>
      <Switch
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
        {...args}
      />
    </Flex>
  )
}

export const BasicDisabled = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Switch
      onChange={e => {
        console.log(e)
      }}
      {...args}
    />
  </Flex>
)
BasicDisabled.args = {
  disabled: true
}

export const Checked = (args): ReactElement => {
  const [checked, setChecked] = useState(true)

  return (
    <Flex variant='fullCentralized'>
      <Switch
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
        {...args}
      />
    </Flex>
  )
}

export const DisabledChecked = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Switch
      onChange={e => {
        console.log(e)
      }}
      {...args}
    />
  </Flex>
)
DisabledChecked.args = {
  disabled: true,
  checked: true
}

export const Variants = (): ReactElement => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)

  return (
    <Flex variant='fullCentralized'>
      <Switch
        checked={checked1}
        onChange={e => {
          setChecked1(e.target.checked)
        }}
        variant='default'
      />
      <Switch
        checked={checked2}
        onChange={e => {
          setChecked2(e.target.checked)
        }}
        variant='small'
      />
    </Flex>
  )
}
