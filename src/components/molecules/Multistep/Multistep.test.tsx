import React from 'react'

import { render } from '../../utils/test/render'

import { Multistep } from './Multistep'

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

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Multistep disabledClickStep={true} stepCurrent={0} steps={steps} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
