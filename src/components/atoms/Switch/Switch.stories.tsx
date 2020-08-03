import React, { ReactElement, useState } from 'react'

import { Flex } from '../Flex'
import { Switch } from './Switch'

export default {
  component: Switch,
  title: 'atoms/Switch'
}

export const Basic = (): ReactElement => {
  const [checked, setChecked] = useState(false)

  return (
    <Flex variant='fullCentralized'>
      <Switch checked={checked} onChange={() => setChecked(!checked)} />
    </Flex>
  )
}

export const BasicDisabled = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Switch disabled />
  </Flex>
)

export const Checked = (): ReactElement => {
  const [checked, setChecked] = useState(true)

  return (
    <Flex variant='fullCentralized'>
      <Switch checked={checked} onChange={() => setChecked(!checked)} />
    </Flex>
  )
}

export const DisabledChecked = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Switch disabled checked />
  </Flex>
)
