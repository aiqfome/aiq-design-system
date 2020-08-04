import React from 'react'
import PropTypes from 'prop-types'
import {
  DayPickerRangeController,
  DayPickerRangeControllerShape
} from 'react-dates'

export interface Props extends DayPickerRangeControllerShape {
  onDatesChange: (dates: { startDate: any; endDate: any }) => void
  onFocusChange: (string: 'startDate' | 'endDate' | null) => void
  focusedInput: 'startDate' | 'endDate'
  startDate: any
  endDate: any
}

export const DatePickerRange: React.FC<Props> = ({
  onDatesChange,
  onFocusChange,
  focusedInput,
  startDate,
  endDate,
  ...props
}) => {
  return (
    <DayPickerRangeController
      onDatesChange={onDatesChange}
      onFocusChange={onFocusChange}
      focusedInput={focusedInput}
      startDate={startDate}
      endDate={endDate}
      {...props}
    />
  )
}

DatePickerRange.propTypes = {
  onDatesChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func.isRequired,
  focusedInput: PropTypes.any.isRequired,
  startDate: PropTypes.any,
  endDate: PropTypes.any
}
