import React, { useState, useEffect } from 'react'

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
  value?: Array<Moment>
  name?: string
  errorMessage?: string
  errorForm?: boolean
  placeholder?: string
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

const PlaceHolderText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`

export const DatePickerRange: React.FC<Props> = ({
  value = null,
  onChange,
  errorMessage,
  errorForm,
  placeholder,
  ...props
}) => {
  const [isChangeValue, setIsChangeValue] = useState(value !== null)
  const [startDate, setStarDate] = useState(moment())
  const [endDate, setEndDate] = useState(moment())
  const [focusedInput, setFocusedInput] = useState<
    START_DATE | END_DATE | null
  >(START_DATE)
  const [showDatePicker, setShowDatePicker] = useState(false)

  useEffect(() => {
    if (value != null && value.length > 1) {
      setStarDate(value[0])
      setEndDate(value[1])
    }
  }, [value])

  function onDatesChange({ startDate, endDate }) {
    setStarDate(startDate)
    setEndDate(endDate)
    onChange(startDate, endDate)
    setIsChangeValue(true)
  }

  function onFocusChange(focusedInput) {
    setFocusedInput(!focusedInput ? START_DATE : focusedInput)
    if (moment(startDate).isBefore(endDate)) {
      setShowDatePicker(false)
    }
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      maxWidth='250px'
      width='100%'
    >
      <ButtonDatePicker
        onClick={() => setShowDatePicker(!showDatePicker)}
        alignItems='center'
        px='12px'
        backgroundColor='#fff'
        py='10px'
        maxHeight='37px'
        justifyContent='space-between'
        width='100%'
        border={errorForm ? '1px solid #DE4E51' : '1px solid #dedede'}
        borderRadius='4px'
      >
        {isChangeValue || !placeholder ? (
          <Text fontSize='small' cursor='pointer'>
            {`${moment(startDate).format('DD/MM')} - ${moment(endDate).format(
              'DD/MM'
            )}`}
          </Text>
        ) : (
          <PlaceHolderText color='#bfbfbf' cursor='pointer'>
            {placeholder}
          </PlaceHolderText>
        )}

        <Icon>
          <MdArrowDropDown size={24} />
        </Icon>
      </ButtonDatePicker>
      {errorForm && (
        <Text color='grey' fontSize='small' mt={2}>
          {errorMessage}
        </Text>
      )}
      {showDatePicker && (
        <DatePickerWrapper>
          <DayPickerRangeController
            initialVisibleMonth={() => moment()}
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
  value: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorForm: PropTypes.bool,
  placeholder: PropTypes.string
}
