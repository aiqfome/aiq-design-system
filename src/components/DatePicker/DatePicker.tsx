import React from 'react'

import PropTypes from 'prop-types'

import { Moment } from 'moment'

import { DatePickerRange } from './DatePickerRange'
import { DatePickerSingle } from './DatePickerSingle'

export interface Props {
  variant?: 'single' | 'range'
  value?: Array<Moment>
  name?: string
  errorMessage?: string
  errorForm?: boolean
  placeholder?: string
  onChange: (startDate, endDate?: any) => void
}

export const DatePicker: React.FC<Props> = ({
  variant = 'single',
  value,
  onChange,
  errorMessage,
  errorForm,
  placeholder,
  ...props
}) => {
  if (variant === 'range') {
    return (
      <DatePickerRange
        placeholder={placeholder}
        errorForm={errorForm}
        errorMessage={errorMessage}
        value={value}
        onChange={onChange}
        {...props}
      />
    )
  }

  return (
    <DatePickerSingle
      placeholder={placeholder}
      errorForm={errorForm}
      errorMessage={errorMessage}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

DatePicker.propTypes = {
  variant: PropTypes.oneOf(['single', 'range']),
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  errorForm: PropTypes.bool,
  placeholder: PropTypes.string
}
