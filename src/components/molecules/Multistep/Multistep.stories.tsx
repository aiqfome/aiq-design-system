import React from 'react'

import { Multistep } from './Multistep'

export default {
  component: Multistep,
  title: 'molecules/Multistep'
}

// eslint-disable-next-line react/prop-types
const Step: React.FC = ({ children }) => {
  return <h1>{children}</h1>
}

export const Basic: React.FC = () => {
  const steps = [
    { name: 'StepOne', component: <Step>One</Step> },
    { name: 'StepTwo', component: <Step>Two</Step> },
    { name: 'StepThree', component: <Step>Three</Step> },
    { name: 'StepFour', component: <Step>Four</Step> }
  ]
  return <Multistep stepActive={0} steps={steps} />
}
