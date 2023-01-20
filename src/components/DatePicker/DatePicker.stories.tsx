import React, { useState } from 'react'

import moment, { Moment } from 'moment'

import { Flex } from '../Flex'

import { DatePicker } from './DatePicker'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'variant',
  'value',
  'name',
  'errorMessage',
  'errorForm',
  'placeholder',
  'onChange'
]

export default createPageExport(DatePicker, 'DatePicker', aiqProps, {
  argTypes: {
    value: { control: 'object' },
    variant: { control: 'select', options: ['single', 'range'] },
    errorForm: { control: 'boolean' }
  }
})

export const Basic: React.FC = args => {
  const [valueDatePicker, setValueDatePicker] = useState([moment(), moment()])

  function handleChangeDatePicker(startDate, endDate) {
    setValueDatePicker([startDate, endDate])
  }

  return (
    <DatePicker
      value={valueDatePicker}
      onChange={handleChangeDatePicker}
      {...args}
    />
  )
}

export const Variants: React.FC = args => {
  const [valueDatePicker, setValueDatePicker] = useState([moment(), moment()])

  function handleChangeDatePicker(startDate, endDate) {
    setValueDatePicker([startDate, endDate])
  }

  return (
    <Flex
      flexDirection='row'
      variant='fullCentralized'
      justifyContent='space-between'
    >
      <Flex mr={16}>
        <DatePicker
          variant='range'
          value={valueDatePicker}
          onChange={handleChangeDatePicker}
          {...args}
        />
      </Flex>

      <DatePicker
        variant='single'
        value={valueDatePicker}
        onChange={handleChangeDatePicker}
        {...args}
      />
    </Flex>
  )
}

export const PlaceHolder: React.FC = args => {
  const [valueDatePicker, setValueDatePicker] = useState<Array<Moment>>()

  function handleChangeDatePicker(startDate, endDate) {
    setValueDatePicker([startDate, endDate])
  }

  return (
    <Flex
      flexDirection='row'
      variant='fullCentralized'
      justifyContent='space-between'
    >
      <Flex mr={16}>
        <DatePicker
          variant='range'
          placeholder='Houston, we have a problem'
          value={valueDatePicker}
          onChange={handleChangeDatePicker}
          {...args}
        />
      </Flex>

      <DatePicker
        variant='single'
        placeholder='Aiqfome'
        value={valueDatePicker}
        onChange={handleChangeDatePicker}
        {...args}
      />
    </Flex>
  )
}

export const Error: React.FC = args => {
  const [valueDatePicker, setValueDatePicker] = useState<Array<Moment>>()

  function handleChangeDatePicker(startDate, endDate) {
    setValueDatePicker([startDate, endDate])
  }

  return (
    <Flex
      flexDirection='row'
      variant='fullCentralized'
      justifyContent='space-between'
    >
      <Flex mr={16}>
        <DatePicker
          variant='range'
          placeholder='Aiqfome'
          value={valueDatePicker}
          onChange={handleChangeDatePicker}
          errorForm={true}
          errorMessage='Houston, we have a problem'
          {...args}
        />
      </Flex>

      <DatePicker
        variant='single'
        placeholder='Aiqfome'
        value={valueDatePicker}
        onChange={handleChangeDatePicker}
        errorForm={true}
        errorMessage='Houston, we have a problem'
        {...args}
      />
    </Flex>
  )
}
