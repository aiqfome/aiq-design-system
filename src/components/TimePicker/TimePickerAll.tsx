import React, { useState } from 'react'

import styled from 'styled-components'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Input } from '../Input'
import { TimeUnity } from './TimeUnity'
import { useCallback } from 'react'
import { useEffect } from 'react'

export interface Props {
  value?: any
  sufix?: any
  name?: string
  label?: string
  errorForm?: boolean
  hasSeconds?: boolean
  placeholder?: string
  errorMessage?: string
  maxWidth?: string | number
  onChange?: (e: any) => void
  variant?: 'outlined' | 'default'
  onChangeInput?: (e: any) => void
  getValue?: (input: any) => string
}

interface PickerProps {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const Picker = styled(Box)<PickerProps>``

export const TimePickerAll = React.forwardRef(
  <HTMLInputElement, Props>(
    {
      name,
      value,
      label,
      sufix,
      variant,
      maxWidth,
      getValue,
      errorForm,
      hasSeconds,
      placeholder,
      errorMessage,
      onChangeInput = (e: any) => {
        console.log('input:', e)
      },
      onChange = (e: any) => {
        console.log('input:', e)
      },
      ...props
    },
    ref
  ) => {
    const [showPicker, setShowPicker] = useState(false)
    const [inputValue, setInputValue] = useState(value || '')

    useEffect(() => {
      setInputValue(value || '')
    }, [value])

    const applyMask = (value = '') => {
      if (hasSeconds) {
        return value
          .replace(/[\D]+/g, '')
          .replace(/(\d{2})(\d)/, '$1:$2')
          .replace(/(\d{2})(\d)/, '$1:$2')
          .replace(/(:\d{2})\d+?$/, '$1')
      }

      return value
        .replace(/[\D]+/g, '')
        .replace(/(\d{2})(\d)/, '$1:$2')
        .replace(/(:\d{2})\d+?$/, '$1')
    }

    const handleInputOnChange = e => {
      const { value = '' } = e?.target || {}
      if (getValue) {
        onChangeInput(value)
        return ''
      }

      const valueSplited = applyMask(value).split(':')

      if (valueSplited.length > 0 && valueSplited[0]) {
        const number = Number(valueSplited[0])
        if (number > 24) valueSplited[0] = '24'
      }

      if (valueSplited.length > 1 && valueSplited[1]) {
        const number = Number(valueSplited[1])
        if (number > 59) valueSplited[1] = '59'
      }

      if (valueSplited.length > 2 && valueSplited[2]) {
        const number = Number(valueSplited[2])
        if (number > 59) valueSplited[2] = '59'
      }

      const time = valueSplited.join(':')

      setInputValue(time)
      onChange(time)
    }

    const getTime = (time = '') => {
      const valueSplited = inputValue.split(':')

      if (time === 'hour' && valueSplited.length > 0) {
        return parseInt(valueSplited[0] || 0)
      }

      if (time === 'min' && valueSplited.length > 1) {
        return parseInt(valueSplited[1] || 0)
      }

      if (time === 'sec' && valueSplited.length > 2) {
        return parseInt(valueSplited[2] || 0)
      }

      return 0
    }

    const handleOnChangeTime = (time = '', value = '') => {
      const valueSplited = inputValue.split(':')
      const newValues = ['00', '00', '00']

      if (valueSplited.length > 0 && valueSplited[0]) {
        newValues[0] = valueSplited[0]
      }

      if (valueSplited.length > 1 && valueSplited[1]) {
        newValues[1] = valueSplited[1]
      }

      if (valueSplited.length > 2 && valueSplited[2]) {
        newValues[2] = valueSplited[2]
      }

      if (time === 'hour') newValues[0] = value
      if (time === 'min') newValues[1] = value
      if (time === 'sec') newValues[2] = value

      let formattedValue = `${newValues[0]}:${newValues[1]}`

      if (hasSeconds) {
        formattedValue = `${newValues[0]}:${newValues[1]}:${newValues[2]}`
      }

      setInputValue(formattedValue)
      onChange(formattedValue)
    }

    const getInputValue = useCallback(() => {
      if (getValue) return getValue(inputValue)

      return inputValue
    }, [inputValue, getValue])

    return (
      <Picker
        position='relative'
        maxWidth={maxWidth}
        data-testid='timepicker'
        onMouseEnter={() => setShowPicker(true)}
        onMouseLeave={() => setShowPicker(false)}
        {...props}
      >
        <Input
          name={name}
          label={label}
          sufix={sufix}
          inputRef={ref}
          variant={variant}
          errorForm={errorForm}
          value={getInputValue()}
          placeholder={placeholder}
          errorMessage={errorMessage}
          onChange={handleInputOnChange}
        />

        {showPicker && (
          <Box
            top='38px'
            zIndex={1}
            width='100%'
            padding='8px 16px'
            borderRadius='8px'
            position='absolute'
            maxWidth={maxWidth}
            backgroundColor='#fff'
            border='1px solid #dedede'
            data-testid='timepicker-open'
            boxShadow='0px 3px 6px #00000017'
          >
            <Flex flexDirection='row' justifyContent='space-between'>
              <TimeUnity
                min={0}
                max={23}
                label='hora'
                value={getTime('hour')}
                onChange={value => handleOnChangeTime('hour', value)}
              />

              <TimeUnity
                min={0}
                max={59}
                label='min'
                value={getTime('min')}
                onChange={value => handleOnChangeTime('min', value)}
              />

              {hasSeconds && (
                <TimeUnity
                  min={0}
                  max={59}
                  label='segundos'
                  value={getTime('sec')}
                  onChange={value => handleOnChangeTime('sec', value)}
                />
              )}
            </Flex>
          </Box>
        )}
      </Picker>
    )
  }
)

TimePickerAll.displayName = 'TimePickerAll'
