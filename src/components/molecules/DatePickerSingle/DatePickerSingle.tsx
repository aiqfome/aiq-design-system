import React from 'react'
import {
  SingleDatePicker as SingleDatePickerOriginal,
  SingleDatePickerShape
} from 'react-dates'
import PropTypes from 'prop-types'

export type Props = SingleDatePickerShape

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
      numberOfMonths={1}
      id={id}
      date={date}
      focused={focused}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      {...props}
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
