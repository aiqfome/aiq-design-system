import React, { useState } from 'react'

import PropTypes from 'prop-types'

import styled from 'styled-components'

import { MdExpandLess, MdExpandMore } from 'react-icons/md'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'

interface Props {
  max: number
  min: number
  label: string
}

interface ButtonProps {
  onClick: () => void
}

const Button = styled(Icon)<ButtonProps>`
  &:hover {
    cursor: pointer;
  }
`

export const TimeUnity: React.FC<Props> = ({ max, min, label }) => {
  const [number, setNumber] = useState(0)

  function upNumber() {
    if (max > number) {
      setNumber(number + 1)
    } else {
      setNumber(min)
    }
  }

  function downNumber() {
    if (min < number) {
      setNumber(number - 1)
    } else {
      setNumber(max)
    }
  }

  return (
    <Flex variant='centralized' flexDirection='column'>
      <Button onClick={upNumber} color='primary'>
        <MdExpandLess size={32} />
      </Button>
      <Text fontSize='xlarge' fontWeight='medium'>
        {('00' + number).slice(-2)}
      </Text>
      <Button onClick={downNumber} color='primary'>
        <MdExpandMore size={32} />
      </Button>
      <Text color='primary' fontSize='small' fontWeight='medium'>
        {label}
      </Text>
    </Flex>
  )
}

TimeUnity.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}
