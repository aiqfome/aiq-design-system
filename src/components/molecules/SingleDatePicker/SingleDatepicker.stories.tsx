import React, { useState } from 'react'
import SingleDatePicker from './SingleDatePicker'
import moment from 'moment'

import { Flex } from '../../atoms/Flex'

export default {
  component: SingleDatePicker,
  title: 'molecules/SingleDatePicker'
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
      <SingleDatePicker
        id='datapicker'
        date={date}
        focused={focused}
        onFocusChange={onFocusChange}
        onDateChange={onDateChange}
      />
    </Flex>
  )
}
