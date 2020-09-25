import React, { useState } from 'react'

import PropTypes from 'prop-types'

import moment, { Moment } from 'moment'

import styled from 'styled-components'

import { START_DATE, END_DATE } from 'react-dates/constants'

import { DayPickerRangeController } from 'react-dates'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { MdArrowDropDown } from 'react-icons/md'

export interface Props {
  value: Array<Moment>
  name?: string
  onChange: (startDate, endDate) => void
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

export const DatePickerRange: React.FC<Props> = ({
  value = [moment(), moment()],
  onChange,
  name,
  ...props
}) => {
  const [startDate, setStarDate] = useState(value[0])
  const [endDate, setEndDate] = useState(value[1])
  const [focusedInput, setFocusedInput] = useState<
    START_DATE | END_DATE | null
  >(START_DATE)
  const [showDatePicker, setShowDatePicker] = useState(false)

  function onDatesChange({ startDate, endDate }) {
    setStarDate(startDate)
    setEndDate(endDate)
    onChange(startDate, endDate)
  }

  function onFocusChange(focusedInput) {
    setFocusedInput(!focusedInput ? START_DATE : focusedInput)
    if (moment(startDate).isBefore(endDate)) {
      setShowDatePicker(false)
    }
  }

  return (
    <Flex position='relative' maxWidth='200px' width='100%'>
      <ButtonDatePicker
        onClick={() => setShowDatePicker(!showDatePicker)}
        alignItems='center'
        px='12px'
        backgroundColor='#fff'
        py='10px'
        maxHeight='39px'
        justifyContent='space-between'
        width='100%'
        border='1px solid #dedede'
        borderRadius='4px'
      >
        <Text cursor='pointer'>
          {`${moment(startDate).format('DD/MM')} - ${moment(endDate).format(
            'DD/MM'
          )}`}
        </Text>
        <Icon>
          <MdArrowDropDown size={28} />
        </Icon>
      </ButtonDatePicker>
      {showDatePicker && (
        <DatePickerWrapper>
          <DayPickerRangeController
            {...props}
            numberOfMonths={2}
            onDatesChange={onDatesChange}
            onFocusChange={onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
          />
        </DatePickerWrapper>
      )}
    </Flex>
  )
}

DatePickerRange.propTypes = {
  value: PropTypes.array.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
