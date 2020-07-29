import React from 'react'

import { Flex } from '../Flex'
import { Switch } from './Switch'

export default {
  component: Switch,
  title: 'atoms/Switch'
}

export const basic = () => (
  <Flex variant='fullCentralized'>
    <Switch />
  </Flex>
)

export const basicDisabled = () => (
  <Flex variant='fullCentralized'>
    <Switch disabled />
  </Flex>
)

export const checked = () => (
  <Flex variant='fullCentralized'>
    <Switch checked />
  </Flex>
)

export const disabledChecked = () => (
  <Flex variant='fullCentralized'>
    <Switch disabled checked />
  </Flex>
)
