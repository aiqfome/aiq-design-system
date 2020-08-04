import React from 'react'
import { SingleDatePicker as SingleDatePickerOriginal } from 'react-dates'
import PropTypes from 'prop-types'

export interface Props {
  id: any
  date: any
  focused: any
  onDateChange: any
  onFocusChange: any
}

export const DatePickerSingle: React.FC<Props> = ({
  id,
  date,
  focused,
  onDateChange,
  onFocusChange,
  ...props
}) => {
  return (
    <SingleDatePickerOriginal
      {...props}
      numberOfMonths={1}
      id={id}
      date={date}
      focused={focused}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
    />
  )
}

DatePickerSingle.propTypes = {
  id: PropTypes.any.isRequired,
  date: PropTypes.any.isRequired,
  focused: PropTypes.any.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func.isRequired
}
