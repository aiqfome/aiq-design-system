import React, { InputHTMLAttributes } from 'react'

import InputMask from 'react-input-mask'

import { InputNeutral } from './InputNeutral'
import { InputOutlined } from './InputOutlined'
import { InputTags } from './InputTags'

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
  name?: string
  inputRef?: any
  label?: string
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string
  isLoading?: boolean
  sufix?: any
  prefix?: any
  variant?: 'outlined' | 'default' | 'tags'
  placeholder?: string
  containerProps?: any

  boxProps?: any
  backgroundColor?: any
  border?: any
  width?: any
  maxWidth?: any
  mask?: string
  nativeAutoComplete?: 'on' | 'disabled'
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      inputRef,
      label,
      errorForm,
      type = 'text',
      errorMessage,
      sufix,
      prefix,
      value,
      isLoading,
      variant,
      placeholder,
      mask,
      onChange,
      disabled,
      nativeAutoComplete = 'on',
      ...props
    },
    ref
  ) => {
    if (variant === 'outlined') {
      if (mask) {
        return (
          <InputMask
            mask={mask}
            value={value}
            onChange={onChange}
            disabled={disabled}
          >
            {inputProps => (
              <InputOutlined
                name={name}
                label={label}
                errorForm={errorForm}
                type={type}
                errorMessage={errorMessage}
                sufix={sufix}
                data-testid='input-container'
                placeholder={placeholder}
                disabled={disabled}
                isLoading={isLoading}
                nativeAutoComplete={nativeAutoComplete}
                ref={ref}
                inputRef={inputRef || ref}
                {...props}
                {...inputProps}
              />
            )}
          </InputMask>
        )
      }

      return (
        <InputOutlined
          name={name}
          label={label}
          errorForm={errorForm}
          type={type}
          errorMessage={errorMessage}
          sufix={sufix}
          value={value}
          data-testid='input-container'
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          isLoading={isLoading}
          nativeAutoComplete={nativeAutoComplete}
          ref={ref}
          inputRef={inputRef || ref}
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
          onChange={onChange}
          data-testid='input-container'
          nativeAutoComplete={nativeAutoComplete}
          ref={ref}
          {...props}
        />
      )
    }

    if (mask) {
      return (
        <InputMask
          mask={mask}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {inputProps => (
            <InputNeutral
              name={name}
              errorForm={errorForm}
              type={type}
              errorMessage={errorMessage}
              sufix={sufix}
              prefix={prefix}
              placeholder={placeholder}
              data-testid='input-container'
              nativeAutoComplete={nativeAutoComplete}
              ref={ref}
              inputRef={inputRef || ref}
              {...inputProps}
              {...props}
            />
          )}
        </InputMask>
      )
    }

    return (
      <InputNeutral
        name={name}
        errorForm={errorForm}
        type={type}
        errorMessage={errorMessage}
        sufix={sufix}
        prefix={prefix}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        data-testid='input-container'
        disabled={disabled}
        isLoading={isLoading}
        nativeAutoComplete={nativeAutoComplete}
        ref={ref}
        inputRef={inputRef || ref}
        {...props}
      />
    )
  }
)
