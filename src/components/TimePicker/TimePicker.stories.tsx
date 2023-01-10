import React, { ReactElement, useState } from 'react'

import { TimePicker } from './TimePicker'

import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'value',
  'sufix',
  'name',
  'label',
  'errorForm',
  'hasSeconds',
  'placeholder',
  'errorMessage',
  'type',
  'maxWidth',
  'onChange',
  'variant',
  'onChangeInput',
  'getValue',
  'disabled'
]

export default createPageExport(TimePicker, 'TimePicker', aiqProps, {
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
    maxWidth: { control: 'text' },
    errorForm: { control: 'boolean' },
    hasSeconds: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['minSec', 'all'] },
    variant: { control: 'select', options: ['outlined', 'default'] }
  }
})

export const Basic = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <TimePicker onChange={value => console.log(value)} {...args} />
  </Flex>
)
Basic.args = {
  placeholder: 'aiqfome',
  value: '12:30',
  maxWidth: '100px'
}

export const Disabled = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <TimePicker onChange={value => console.log(value)} {...args} />
  </Flex>
)
Disabled.args = {
  placeholder: 'aiqfome',
  value: '12:30',
  maxWidth: '100px',
  disabled: true
}

export const Outlined = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <TimePicker {...args} />
  </Flex>
)
Outlined.args = {
  label: 'aiqfome',
  variant: 'outlined',
  maxWidth: '120px'
}

export const HasSeconds = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <TimePicker {...args} />
  </Flex>
)
HasSeconds.args = {
  label: 'aiqfome',
  variant: 'outlined',
  hasSeconds: true
}

export const TypeMinSec = (args): ReactElement => {
  const [value, setValue] = useState('23:23')
  const [hours, setHours] = useState('22:22')
  return (
    <Flex variant='fullCentralized' flexDirection='column'>
      <TimePicker {...args} />

      <TimePicker
        value={hours}
        label='valor formatado (h-m)'
        variant='outlined'
        onChangeInput={time => {
          const aux = `${time.replace(/\D/g, '')}`
          let hour = aux.substring(0, 2)
          let minutes = aux.substring(2, 4)

          if (
            hours.replace(/\D/g, '').length >= aux.length &&
            aux.length === 2 &&
            !time.includes('h')
          ) {
            hour = aux.substring(0, 1)
          }

          if (
            hours.replace(/\D/g, '').length === 4 &&
            aux.length === 4 &&
            !time.includes('m')
          ) {
            minutes = aux.substring(2, 3)
          }

          if (hour) {
            const number = Number(hour)
            if (number > 24) hour = '24'
          }

          if (minutes) {
            const number = Number(minutes)
            if (number > 59) minutes = '59'
          }

          let newValue = hour
          if (hour.length >= 2) newValue = `${hour}:${minutes}`

          setHours(newValue)
        }}
        onChange={time => setHours(time)}
        getValue={input => {
          const values = input.split(':')
          if (values.length < 2) return values

          if (values[0].length === 1) return `${values[0]}`
          if (!values[1]) return `${values[0]}h`
          if (values[1].length === 1) return `${values[0]}h ${values[1]}`

          return `${values[0]}h ${values[1]}m`
        }}
      />

      <TimePicker
        type='minSec'
        value={value}
        label='valor formatado'
        variant='outlined'
        onChangeInput={time => {
          const aux = `${time.replace(/\D/g, '')}`
          let hour = aux.substring(0, 2)
          let minutes = aux.substring(2, 4)

          if (
            value.replace(/\D/g, '').length >= aux.length &&
            aux.length === 2 &&
            !time.includes('m')
          ) {
            hour = aux.substring(0, 1)
          }

          if (
            value.replace(/\D/g, '').length === 4 &&
            aux.length === 4 &&
            !time.includes('s')
          ) {
            minutes = aux.substring(2, 3)
          }

          if (hour) {
            const number = Number(hour)
            if (number > 59) hour = '59'
          }

          if (minutes) {
            const number = Number(minutes)
            if (number > 59) minutes = '59'
          }

          let newValue = hour
          if (hour.length >= 2) newValue = `${hour}:${minutes}`

          setValue(newValue)
        }}
        onChange={time => setValue(time)}
        getValue={input => {
          const values = input.split(':')
          if (values.length < 2) return values

          if (values[0].length === 1) return `${values[0]}`
          if (!values[1]) return `${values[0]}m`
          if (values[1].length === 1) return `${values[0]}m ${values[1]}`

          return `${values[0]}m ${values[1]}s`
        }}
      />
    </Flex>
  )
}
TypeMinSec.args = {
  label: 'aiqfome',
  variant: 'outlined',
  type: 'minSec'
}
