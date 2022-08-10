import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import { MdExpandLess, MdExpandMore } from 'react-icons/md'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'

interface Props {
  max: number
  min: number
  label: string
  value: number
  onChange?: (value: any) => void
}

interface ButtonProps {
  onClick: () => void
}

const Button = styled(Icon)<ButtonProps>`
  &:hover {
    cursor: pointer;
  }
`

export const TimeUnity: React.FC<Props> = ({
  max,
  min,
  label,
  value,
  onChange = () => {
    // do nothing.
  }
}) => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    setNumber(value)
  }, [value])

  function upNumber() {
    if (max > number) {
      setNumber(number + 1)
      onChange(('00' + (number + 1)).slice(-2))
    } else {
      setNumber(min)
      onChange('00')
    }
  }

  function downNumber() {
    if (min < number) {
      setNumber(number - 1)
      onChange(('00' + (number - 1)).slice(-2))
    } else {
      setNumber(max)
      onChange(max)
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
