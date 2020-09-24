import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { MdExpandLess, MdExpandMore } from 'react-icons/md'

import { Input } from '../Input'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { TimeUnity } from './TimeUnity'

export interface Props {
  value?: any
  placeholder?: string
  label?: string
  variant?: 'outlined' | 'default'
  onChange?: () => void
  maxWidth?: string | number
}

const Button = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`

export const TimePicker: React.FC<Props> = ({
  value,
  placeholder,
  label,
  variant,
  onChange,
  maxWidth
}) => {
  const [showPicker, setShowPicker] = useState(false)

  return (
    <Box position='relative' maxWidth={maxWidth}>
      <Input
        onFocus={() => setShowPicker(!showPicker)}
        // onBlur={() => setShowPicker(false)}
        value={value}
        readOnly={true}
        variant={variant}
        placeholder={placeholder}
        label={label}
        onChange={onChange}
      />
      {showPicker && (
        <Box
          width='100%'
          maxWidth={maxWidth}
          position='absolute'
          top='40px'
          border='1px solid #dedede'
          boxShadow='0px 3px 6px #00000017'
          borderRadius='8px'
          padding='8px 16px'
        >
          <Flex flexDirection='row' justifyContent='space-between'>
            <TimeUnity label='hora' max={23} min={0} />
            <TimeUnity label='min' max={59} min={0} />
          </Flex>
        </Box>
      )}
    </Box>
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
