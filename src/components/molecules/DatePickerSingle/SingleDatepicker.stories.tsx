import React, { useState } from 'react'
import { DatePickerSingle } from './DatePickerSingle'
import moment from 'moment'

import { Flex } from '../../atoms/Flex'

export default {
  component: DatePickerSingle,
  title: 'molecules/DatePickerSingle'
}

export const Basic: React.FC = () => {
  const [date, setDate] = useState(moment())
  const [focused, setFocused] = useState(false)

  function onDateChange(data) {
    setDate(data)
  }

  function onFocusChange({ focused }) {
    setFocused(focused)
  }

  return (
    <Flex variant='fullCentralized'>
      <DatePickerSingle
        id='datapicker'
        date={date}
        focused={focused}
        onFocusChange={onFocusChange}
        onDateChange={onDateChange}
      />
    </Flex>
  )
}
