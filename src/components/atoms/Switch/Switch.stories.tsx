import React, { ReactElement } from 'react'

import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { Switch } from './Switch'

export default {
  component: Switch,
  title: 'atoms/Switch',
  decorators: [withKnobs]
}

export const Basic = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Switch checked={boolean('checked', false)} />
    </Flex>
  )
}

export const BasicDisabled = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Switch disabled />
  </Flex>
)

export const Checked = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Switch checked={true} />
    </Flex>
  )
}

export const DisabledChecked = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Switch disabled checked />
  </Flex>
)
