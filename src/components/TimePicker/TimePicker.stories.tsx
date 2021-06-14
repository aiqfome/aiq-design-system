import React, { ReactElement } from 'react'

import { TimePicker } from './TimePicker'

import { Flex } from '../Flex'

export default {
  component: TimePicker,
  title: 'TimePicker'
}

export const Basic: React.FC = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <TimePicker
      onChange={value => console.log(value)}
      placeholder='aiqfome'
      maxWidth='100px'
      value='12:30'
    />
  </Flex>
)

export const Outlined: React.FC = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <TimePicker variant='outlined' label='aiqfome' maxWidth='120px' />
  </Flex>
)

export const HasSeconds: React.FC = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <TimePicker hasSeconds label='aiqfome' variant='outlined' />
  </Flex>
)

export const TypeMinSec: React.FC = (): ReactElement => (
  <Flex variant='fullCentralized' flexDirection='column'>
    <TimePicker type='minSec' label='aiqfome' variant='outlined' />

    <TimePicker
      type='minSec'
      label='valor formatado'
      variant='outlined'
      getValue={input => {
        const values = input.split(':')
        if (values.length < 2) return ''

        return `${values[0]}m ${values[1]}s`
      }}
    />
  </Flex>
)
