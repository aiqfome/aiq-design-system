import React, { ReactElement, useState } from 'react'

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

export const TypeMinSec: React.FC = (): ReactElement => {
  const [value, setValue] = useState('23:23')
  const [hours, setHours] = useState('22:22')
  return (
    <Flex variant='fullCentralized' flexDirection='column'>
      <TimePicker type='minSec' label='aiqfome' variant='outlined' />

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
