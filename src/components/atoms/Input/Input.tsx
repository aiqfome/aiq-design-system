import React, { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { InputOutlined } from './InputOutlined'
import { InputNeutral } from './InputNeutral'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  inputRef?: any
  label?: string
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string
  sufix?: any
  variant?: string
  placeholder?: string
}

export const Input: React.FC<Props> = ({
  name,
  inputRef,
  label,
  errorForm,
  type = 'text',
  errorMessage,
  sufix,
  value,
  variant,
  placeholder
}) => {
  if (variant === 'outlined') {
    return (
      <InputOutlined
        name={name}
        inputRef={inputRef}
        label={label}
        errorForm={errorForm}
        type={type}
        errorMessage={errorMessage}
        sufix={sufix}
        value={value}
      />
    )
  }

  return (
    <InputNeutral
      name={name}
      inputRef={inputRef}
      errorForm={errorForm}
      type={type}
      errorMessage={errorMessage}
      sufix={sufix}
      value={value}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  inputRef: PropTypes.any,
  label: PropTypes.string,
  errorForm: PropTypes.bool,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  sufix: PropTypes.any,
  value: PropTypes.string,
  variant: PropTypes.string,
  placeholder: PropTypes.string
}
