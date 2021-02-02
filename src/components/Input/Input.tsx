import React, { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { InputOutlined } from './InputOutlined'
import { InputNeutral } from './InputNeutral'
import { InputTags } from './InputTags'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  inputRef?: any
  label?: string
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string
  sufix?: any
  prefix?: any
  variant?: 'outlined' | 'default' | 'tags'
  placeholder?: string

  backgroundColor?: any
  border?: any
  width?: any
  maxWidth?: any
}

export const Input: React.FC<Props> = ({
  name,
  inputRef,
  label,
  errorForm,
  type = 'text',
  errorMessage,
  sufix,
  prefix,
  value,
  variant,
  placeholder,
  ...props
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
        data-testid='input-container'
        placeholder={placeholder}
        {...props}
      />
    )
  }

  if (variant === 'tags') {
    return (
      <InputTags
        name={name}
        errorForm={errorForm}
        type={type}
        errorMessage={errorMessage}
        value={value}
        placeholder={placeholder}
        data-testid='input-container'
        {...props}
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
      prefix={prefix}
      value={value}
      placeholder={placeholder}
      data-testid='input-container'
      {...props}
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
  prefix: PropTypes.any,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'default', 'tags']),
  placeholder: PropTypes.string,

  backgroundColor: PropTypes.any,
  border: PropTypes.any,
  width: PropTypes.any,
  maxWidth: PropTypes.any
}
