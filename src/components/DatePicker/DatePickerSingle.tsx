import React, { useState } from 'react'

import PropTypes from 'prop-types'

import moment, { Moment } from 'moment'

import styled from 'styled-components'

import { DayPickerSingleDateController } from 'react-dates'

import { Flex } from '../../atoms/Flex'
import { Icon } from '../../atoms/Icon'
import { Text } from '../../atoms/Text'

import { MdArrowDropDown } from 'react-icons/md'

export interface Props {
  variant?: 'single' | 'range'
  value: Array<Moment>
  onChange: (date) => void
  name?: string
}

const DatePickerWrapper = styled(Flex)`
  background: #fff;
  position: absolute;
  top: 40px;
  z-index: 1;
`

const ButtonDatePicker = styled(Flex)`
  &:hover {
    cursor: pointer;
  }
`

export const DatePickerSingle: React.FC<Props> = ({
  value = [moment()],
  name,
  onChange,
  ...props
}) => {
  moment.locale('pt-BR')
  const [date, setDate] = useState(value)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [focused, setFocused] = useState(false)

  function onDateChange(date) {
    setDate([date])
    onChange(date)
  }

  function onFocusChange() {
    setFocused(true)
    setShowDatePicker(false)
  }

  return (
    <Flex position='relative'>
      <ButtonDatePicker
        onClick={() => setShowDatePicker(!showDatePicker)}
        alignItems='center'
        px='12px'
        py='10px'
        maxHeight='39px'
        justifyContent='space-between'
        width='100%'
        maxWidth='200px'
        backgroundColor='#fff'
        border='1px solid #dedede'
        borderRadius='4px'
      >
        <Text mr='16px' cursor='pointer'>{`${moment(date[0]).format(
          'DD/MMMM/YYYY'
        )}`}</Text>
        <Icon>
          <MdArrowDropDown size={28} />
        </Icon>
      </ButtonDatePicker>
      {showDatePicker && (
        <DatePickerWrapper>
          <DayPickerSingleDateController
            {...props}
            onDateChange={onDateChange}
            onFocusChange={onFocusChange}
            focused={focused}
            date={date[0]}
          />
        </DatePickerWrapper>
      )}
    </Flex>
  )
}

DatePickerSingle.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
}
