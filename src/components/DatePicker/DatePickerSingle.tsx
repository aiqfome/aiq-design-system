import React, { useState } from 'react'

import PropTypes from 'prop-types'

import moment, { Moment } from 'moment'

import styled from 'styled-components'

import { DayPickerSingleDateController } from 'react-dates'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { MdArrowDropDown } from 'react-icons/md'

export interface Props {
  variant?: 'single' | 'range'
  value?: Array<Moment>
  onChange?: (date) => void
  name?: string
  errorMessage?: string
  errorForm?: boolean
  placeholder?: string
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

export const DatePickerSingle: React.FC<Props> = ({
  value = [moment()],
  onChange,
  errorMessage,
  errorForm,
  placeholder,
  ...props
}) => {
  moment.locale('pt-BR')
  const [isChangeValue, setIsChangeValue] = useState(false)
  const [date, setDate] = useState(value)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [focused, setFocused] = useState(false)

  function onDateChange(date) {
    setDate([date])
    if (onChange) onChange(date)
    setIsChangeValue(true)
  }

  function onFocusChange() {
    setFocused(true)
    setShowDatePicker(false)
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      data-testid='datepicker-single'
    >
      <ButtonDatePicker
        onClick={() => setShowDatePicker(!showDatePicker)}
        data-testid='datepicker-single-input'
        alignItems='center'
        px='12px'
        py='10px'
        maxHeight='37px'
        justifyContent='space-between'
        width='100%'
        maxWidth='250px'
        backgroundColor='#fff'
        border={errorForm ? '1px solid #DE4E51' : '1px solid #dedede'}
        borderRadius='4px'
      >
        {isChangeValue || !placeholder ? (
          <Text fontSize='small' cursor='pointer'>
            {`${moment(date[0]).format('DD/MMMM/YYYY')}`}
          </Text>
        ) : (
          <PlaceHolderText
            color='#bfbfbf'
            cursor='pointer'
            data-testid='datepicker-placeholder'
          >
            {placeholder}
          </PlaceHolderText>
        )}
        <Icon>
          <MdArrowDropDown size={28} />
        </Icon>
      </ButtonDatePicker>
      {errorForm && (
        <Text
          mt={2}
          color='grey'
          fontSize='small'
          data-testid='datepicker-error'
        >
          {errorMessage}
        </Text>
      )}
      {showDatePicker && (
        <DatePickerWrapper data-testid='datepicker-open'>
          <DayPickerSingleDateController
            initialVisibleMonth={() => moment()}
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
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  errorForm: PropTypes.bool,
  placeholder: PropTypes.string
}
