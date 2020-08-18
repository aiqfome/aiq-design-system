import React, { useState } from 'react'

import { Flex } from '../../atoms/Flex'
import { Button } from '../../atoms/Button'

import { Multistep } from './Multistep'

export default {
  component: Multistep,
  title: 'molecules/Multistep'
}

// eslint-disable-next-line react/prop-types
const Step: React.FC = ({ children }) => {
  return <h1>{children}</h1>
}

const steps = [
  { name: 'StepOne', component: <Step>One</Step> },
  { name: 'StepTwo', component: <Step>Two</Step> },
  { name: 'StepThree', component: <Step>Three</Step> },
  { name: 'StepFour', component: <Step>Four</Step> }
]

export const Basic: React.FC = () => {
  const [stepCurrent, setStepCurrent] = useState(0)

  function handleClickBtnNext() {
    setStepCurrent(stepCurrent + 1)
  }

  function handleClickBtnLast() {
    setStepCurrent(stepCurrent - 1)
  }

  return (
    <Flex flexDirection='column'>
      <Multistep stepCurrent={stepCurrent} steps={steps} />
      <Flex flexDirection='row' marginTop='16px' variant='centralized'>
        <Button
          onClick={handleClickBtnLast}
          variant='contained'
          palette='primary'
          marginRight={'16px'}
        >
          Last
        </Button>
        <Button
          onClick={handleClickBtnNext}
          variant='contained'
          palette='primary'
        >
          Next
        </Button>
      </Flex>
    </Flex>
  )
}

export const DisabledClickStep: React.FC = () => {
  const [stepCurrent, setStepCurrent] = useState(0)

  function handleClickBtnNext() {
    setStepCurrent(stepCurrent + 1)
  }

  function handleClickBtnLast() {
    setStepCurrent(stepCurrent - 1)
  }

  return (
    <Flex flexDirection='column'>
      <Multistep
        disabledClickStep={true}
        stepCurrent={stepCurrent}
        steps={steps}
      />
      <Flex flexDirection='row' marginTop='16px' variant='centralized'>
        <Button
          onClick={handleClickBtnLast}
          variant='contained'
          palette='primary'
          marginRight={'16px'}
        >
          Last
        </Button>
        <Button
          onClick={handleClickBtnNext}
          variant='contained'
          palette='primary'
        >
          Next
        </Button>
      </Flex>
    </Flex>
  )
}
