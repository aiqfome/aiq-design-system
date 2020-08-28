import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeContext } from 'styled-components'

import { Text } from '../../atoms/Text'
import { Flex } from '../../atoms/Flex'
import { Box } from '../../atoms/Box'
import { Divider } from '../../atoms/Divider'

export interface Props {
  steps: {
    name: string
    component: any
  }[]
  stepCurrent?: number
  disabledClickStep?: boolean
  onClickStep?: () => void
}

const StepButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  background: none;
  border: none;
`

export const Multistep: React.FC<Props> = ({
  steps,
  stepCurrent = 0,
  disabledClickStep = 0,
  onClickStep,
  ...props
}) => {
  const theme = useContext(ThemeContext)
  const [stepActive, setStepActive] = useState(stepCurrent)

  useEffect(() => {
    if (stepCurrent >= 0 && stepCurrent < steps.length) {
      setStepActive(stepCurrent)
    }
  }, [stepCurrent, steps])

  function handleClickStep(newStepActive) {
    onClickStep && onClickStep()
    if (!disabledClickStep) {
      setStepActive(newStepActive)
    }
  }

  return (
    <Flex width='100%' alignItems='center' flexDirection='column' {...props}>
      <Flex width='100%'>
        {steps.map((step, index) => (
          <Flex
            key={index}
            marginBottom='32px'
            flexDirection='row'
            alignItems='center'
            width={index === steps.length - 1 ? '80px' : '100%'}
          >
            <StepButton type='button' onClick={() => handleClickStep(index)}>
              <Flex
                backgroundColor={
                  stepActive >= index
                    ? theme.colors.primary
                    : theme.colors.mediumGrey
                }
                height='24px'
                width='24px'
                justifyContent='center'
                alignItems='center'
                marginBottom='12px'
                borderRadius='50px'
              >
                <Text cursor='pointer' color='white'>
                  {index + 1}
                </Text>
              </Flex>
              <Text
                fontWeight='medium'
                fontSize='medium'
                cursor='pointer'
                color={
                  stepActive >= index
                    ? theme.colors.primary
                    : theme.colors.mediumGrey
                }
              >
                {step.name}
              </Text>
            </StepButton>

            {steps.length - 1 > index && (
              <Divider
                color={
                  stepActive > index
                    ? theme.colors.primary
                    : theme.colors.mediumGrey
                }
                width='100%'
              />
            )}
          </Flex>
        ))}
      </Flex>

      {steps.map(
        (step, index) =>
          stepActive === index && <Box key='index'>{step.component}</Box>
      )}
    </Flex>
  )
}

Multistep.propTypes = {
  steps: PropTypes.array.isRequired,
  stepCurrent: PropTypes.number,
  disabledClickStep: PropTypes.bool,
  onClickStep: PropTypes.func
}
