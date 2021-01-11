import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Multistep } from '../Multistep'
import { render } from '../utils/test/render'

const steps = [
  { component: <div data-testid='div'>component</div>, name: 'component' },
  {
    component: <div data-testid='div-1'>component 1</div>,
    name: 'component 1'
  },
  { component: <div data-testid='div-2'>component 2</div>, name: 'component 2' }
]

describe('Multistep', () => {
  it('should have to render without crashing', () => {
    const component = render(<Multistep steps={steps} />)

    expect(component).toBeTruthy()
  })

  it('should have to render content according with stepCurrent prop', () => {
    const { container, getByTestId } = render(
      <Multistep stepCurrent={2} steps={steps} />
    )

    expect(container).toBeTruthy()

    const content = getByTestId('div-2')
    expect(content).toBeTruthy()
  })

  it('should have the same amount steps of the array', () => {
    const { getAllByTestId } = render(<Multistep steps={steps} />)

    expect(getAllByTestId('steps-step').length).toBe(steps.length)
  })

  it('should open step content when clicking in one', () => {
    const { getAllByTestId, getByTestId } = render(<Multistep steps={steps} />)

    let content = getByTestId('div')
    expect(content).toBeTruthy()

    const list = getAllByTestId('step-button')
    fireEvent.click(list[1])

    content = getByTestId('div-1')
    expect(content).toBeTruthy()
  })

  it('should call onChange when click on step', () => {
    const handleOnClick = jest.fn()
    const { getAllByTestId } = render(
      <Multistep steps={steps} onClickStep={handleOnClick} />
    )

    const list = getAllByTestId('step-button')
    fireEvent.click(list[1])

    expect(handleOnClick).toBeCalled()
  })

  it('should not call onChange when click on step if it is disabled', () => {
    const handleOnClick = jest.fn()
    const { getAllByTestId } = render(
      <Multistep steps={steps} onClickStep={handleOnClick} disabledClickStep />
    )

    const list = getAllByTestId('step-button')
    fireEvent.click(list[1])

    expect(handleOnClick).not.toBeCalled()
  })
})
