import React, { useState } from 'react'
import moment from 'moment'

import { DatePickerRange } from './DatePickerRange'

export default {
  component: DatePickerRange,
  title: 'molecules/DatePickerRange'
}

export const Basic: React.FC = () => {
  const [focused, setFocused] = useState<'startDate' | 'endDate'>('startDate')
  const [startDate, setStartDate] = useState(moment())
  const [endDate, setEndDate] = useState(moment())

  function onDatesChange({ startDate, endDate }) {
    if (startDate) {
      setStartDate(startDate)
    }
    if (endDate) {
      setEndDate(endDate)
    }
  }

  function onFocusChange() {
    setFocused(focused || 'startDate')
  }

  return (
    <DatePickerRange
      onDatesChange={onDatesChange}
      onFocusChange={onFocusChange}
      numberOfMonths={2}
      focusedInput={focused}
      minimumNights={2}
      startDate={startDate}
      endDate={endDate}
    />
  )
}
