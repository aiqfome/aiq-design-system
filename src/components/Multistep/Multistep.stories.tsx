import React, { useState } from 'react'

import { Flex } from '../Flex'
import { Button } from '../Button'
import { Multistep } from './Multistep'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['steps', 'stepCurrent', 'disabledClickStep', 'onClickStep']

export default createPageExport(Multistep, 'Multistep', aiqProps, {
  argTypes: {
    steps: { control: 'object' },
    stepCurrent: { control: 'number' },
    disabledClickStep: { control: 'boolean' }
  }
})

export interface Props {
  children?: any
}

const Step: React.FC<Props> = ({ children }) => {
  return <h1>{children}</h1>
}

const steps = [
  { name: 'StepOne', component: <Step>One</Step> },
  { name: 'StepTwo', component: <Step>Two</Step> },
  { name: 'StepThree', component: <Step>Three</Step> },
  { name: 'StepFour', component: <Step>Four</Step> }
]

export const Basic = args => {
  const [stepCurrent, setStepCurrent] = useState(0)

  function handleClickBtnNext() {
    setStepCurrent(stepCurrent + 1)
  }

  function handleClickBtnLast() {
    setStepCurrent(stepCurrent - 1)
  }

  return (
    <Flex flexDirection='column'>
      <Multistep stepCurrent={stepCurrent} {...args} />
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
Basic.args = {
  steps
}

export const DisabledClickStep = args => {
  const [stepCurrent, setStepCurrent] = useState(0)

  function handleClickBtnNext() {
    setStepCurrent(stepCurrent + 1)
  }

  function handleClickBtnLast() {
    setStepCurrent(stepCurrent - 1)
  }

  return (
    <Flex flexDirection='column'>
      <Multistep stepCurrent={stepCurrent} {...args} />
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
DisabledClickStep.args = {
  steps,
  disabledClickStep: true
}
