import React from 'react'
import PropTypes from 'prop-types'

import { TimePickerAll } from './TimePickerAll'
import { TimePickerMinSec } from './TimePickerMinSec'

export interface Props {
  value?: any
  sufix?: any
  name?: string
  label?: string
  errorForm?: boolean
  hasSeconds?: boolean
  placeholder?: string
  errorMessage?: string
  type?: 'minSec' | 'all'
  maxWidth?: string | number
  onChange?: (e: any) => void
  variant?: 'outlined' | 'default'
  onChangeInput?: (e: any) => void
  getValue?: (input: any) => string
}

export const TimePicker: React.FC<Props> = ({ type = 'all', ...props }) => {
  if (type === 'minSec') {
    return <TimePickerMinSec {...props} />
  }

  return <TimePickerAll {...props} />
}

TimePicker.displayName = 'TimePicker'

TimePicker.propTypes = {
  sufix: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  getValue: PropTypes.func,
  errorForm: PropTypes.bool,
  hasSeconds: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
  errorMessage: PropTypes.string,
  type: PropTypes.oneOf(['minSec', 'all']),
  variant: PropTypes.oneOf(['outlined', 'default']),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
