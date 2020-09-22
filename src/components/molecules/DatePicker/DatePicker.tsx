import React from 'react'

import PropTypes from 'prop-types'

import { Moment } from 'moment'

import { DatePickerRange } from './DatePickerRange'
import { DatePickerSingle } from './DatePickerSingle'

export interface Props {
  variant?: 'single' | 'range'
  value: Array<Moment>
  onChange: (startDate, endDate?: any) => void
}

export const DatePicker: React.FC<Props> = ({
  variant = 'single',
  value,
  onChange,
  ...props
}) => {
  if (variant === 'range') {
    return <DatePickerRange value={value} onChange={onChange} {...props} />
  }

  return <DatePickerSingle value={value} onChange={onChange} {...props} />
}

DatePicker.propTypes = {
  variant: PropTypes.oneOf(['single', 'range']),
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
