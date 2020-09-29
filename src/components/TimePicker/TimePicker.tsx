import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Input } from '../Input'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { TimeUnity } from './TimeUnity'

export interface Props {
  value?: any
  placeholder?: string
  label?: string
  variant?: 'outlined' | 'default'
  onChange?: (e: any) => void
  maxWidth?: string | number
}

interface PickerProps {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const Picker = styled(Box)<PickerProps>``

export const TimePicker: React.FC<Props> = ({
  value,
  placeholder,
  label,
  variant,
  maxWidth,
  onChange = (e: any) => {
    // do nothing
  },
  ...props
}) => {
  const [showPicker, setShowPicker] = useState(false)
  const [inputValue, setInputValue] = useState(value || '')

  useEffect(() => {
    onChange(inputValue)
  }, [inputValue])

  function applyMask(value) {
    return value
      .replace(/[\D]+/g, '')
      .replace(/(\d{2})(\d)/, '$1:$2')
      .replace(/(:\d{2})\d+?$/, '$1')
  }

  function handleInputOnChange(e) {
    setInputValue(applyMask(e.target.value))
  }

  function getHour() {
    const valueSplited = inputValue.split(':')
    if (valueSplited.length > 0) {
      return parseInt(valueSplited[0] || 0)
    }
    return 0
  }

  function getMin() {
    const valueSplited = inputValue.split(':')
    if (valueSplited.length > 1) {
      return parseInt(valueSplited[1] || 0)
    }
    return 0
  }

  function handleOnChangeHour(hour) {
    const valueSplited = inputValue.split(':')
    if (valueSplited.length > 0) {
      valueSplited[0] = hour
      if (valueSplited.length < 2) {
        valueSplited[1] = '00'
      }
      setInputValue(`${valueSplited[0]}:${valueSplited[1]}`)
    }
  }

  function handleOnChangeMinute(minute) {
    const valueSplited = inputValue.split(':')
    if (valueSplited.length > 1) {
      valueSplited[1] = minute
      setInputValue(`${valueSplited[0]}:${valueSplited[1]}`)
    }
  }

  return (
    <Picker
      position='relative'
      maxWidth={maxWidth}
      onMouseEnter={() => setShowPicker(true)}
      onMouseLeave={() => setShowPicker(false)}
      {...props}
    >
      <Input
        value={inputValue}
        variant={variant}
        placeholder={placeholder}
        label={label}
        onChange={handleInputOnChange}
      />
      {showPicker && (
        <Box
          width='100%'
          maxWidth={maxWidth}
          position='absolute'
          top='38px'
          border='1px solid #dedede'
          boxShadow='0px 3px 6px #00000017'
          borderRadius='8px'
          padding='8px 16px'
        >
          <Flex flexDirection='row' justifyContent='space-between'>
            <TimeUnity
              value={getHour()}
              onChange={handleOnChangeHour}
              label='hora'
              max={23}
              min={0}
            />
            <TimeUnity
              value={getMin()}
              onChange={handleOnChangeMinute}
              label='min'
              max={59}
              min={0}
            />
          </Flex>
        </Box>
      )}
    </Picker>
  )
}

TimePicker.propTypes = {
  value: PropTypes.any,
  variant: PropTypes.oneOf(['outlined', 'default']),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
