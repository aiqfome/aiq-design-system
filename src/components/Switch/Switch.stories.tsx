import React, { ReactElement, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { Switch } from './Switch'

export default {
  component: Switch,
  title: 'Switch',
  decorators: [withKnobs]
}

export const Basic = (): ReactElement => {
  const [checked, setChecked] = useState(false)

  return (
    <Flex variant='fullCentralized'>
      <Switch
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
      />
    </Flex>
  )
}

export const BasicSecondary = (): ReactElement => {
  const [checked, setChecked] = useState(false)

  return (
    <Flex variant='fullCentralized'>
      <Switch
        checked={checked}
        secondary
        onChange={e => {
          setChecked(e.target.checked)
        }}
      />
    </Flex>
  )
}

export const BasicDisabled = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Switch
      disabled
      onChange={e => {
        console.log(e)
      }}
    />
  </Flex>
)

export const Checked = (): ReactElement => {
  const [checked, setChecked] = useState(true)

  return (
    <Flex variant='fullCentralized'>
      <Switch
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
      />
    </Flex>
  )
}

export const DisabledChecked = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Switch
      disabled
      checked
      onChange={e => {
        console.log(e)
      }}
    />
  </Flex>
)

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
