import React, { useState } from 'react'

import moment from 'moment'

import { Flex } from '../Flex'

import { DatePicker } from './DatePicker'

export default {
  component: DatePicker,
  title: 'molecules/DatePicker'
}

export const Basic: React.FC = () => {
  const [valueDatePicker, setValueDatePicker] = useState([moment(), moment()])

  function handleChangeDatePicker(startDate, endDate) {
    setValueDatePicker([startDate, endDate])
  }

  return (
    <DatePicker value={valueDatePicker} onChange={handleChangeDatePicker} />
  )
}

export const Variants: React.FC = () => {
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
        />
      </Flex>

      <DatePicker
        variant='single'
        value={valueDatePicker}
        onChange={handleChangeDatePicker}
      />
    </Flex>
  )
}
