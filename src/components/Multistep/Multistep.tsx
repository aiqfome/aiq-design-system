import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeContext } from 'styled-components'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Box } from '../Box'
import { Divider } from '../Divider'

export interface Props {
  steps: {
    name: string
    component: any
    icon?: any
  }[]
  stepCurrent?: number
  disabledClickStep?: boolean
  onClickStep?: (key: any) => void
}

export interface ButtonProps {
  disabled?: boolean
}

const StepButton = styled.button<ButtonProps>`
  border: none;
  display: flex;
  background: none;
  align-items: center;
  flex-direction: column;
  min-width: max-content !important;

  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`

const DividerLeftStyled = styled(Divider)`
  position: absolute;
  top: 12px;
  width: 100%;
  right: calc(50% + 25px);
`

const DividerRightStyled = styled(Divider)`
  position: absolute;
  top: 12px;
  width: 100%;
  left: calc(50% + 25px);
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
    if (!disabledClickStep) {
      onClickStep && onClickStep(newStepActive)
      setStepActive(newStepActive)
    }
  }

  return (
    <Flex width='100%' alignItems='center' flexDirection='column' {...props}>
      <Flex width='100%'>
        {steps.map((step, index) => (
          <Flex
            flex={1}
            mb='32px'
            key={index}
            width='auto'
            alignItems='center'
            flexDirection='row'
            data-testid='steps-step'
            {...step}
          >
            <Flex
              width='100%'
              overflow='hidden'
              position='relative'
              justifyContent='center'
            >
              {index > 0 && (
                <DividerLeftStyled
                  color={
                    stepActive >= index
                      ? theme.colors.primary
                      : theme.colors.mediumGrey
                  }
                />
              )}

              <StepButton
                {...step}
                type='button'
                data-testid='step-button'
                disabled={!!disabledClickStep}
                onClick={() => handleClickStep(index)}
              >
                {step.icon || (
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
                    <Text
                      color='white'
                      cursor={disabledClickStep ? 'auto' : 'pointer'}
                    >
                      {index + 1}
                    </Text>
                  </Flex>
                )}
                <Text
                  fontSize='medium'
                  fontWeight='medium'
                  cursor={disabledClickStep ? 'auto' : 'pointer'}
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
                <DividerRightStyled
                  color={
                    stepActive > index
                      ? theme.colors.primary
                      : theme.colors.mediumGrey
                  }
                />
              )}
            </Flex>
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
