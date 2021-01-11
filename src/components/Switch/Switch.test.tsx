import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Switch } from '../Switch'
import { render } from '../utils/test/render'

describe('Switch', () => {
  it('should have to render without crashing', () => {
    const component = render(<Switch />)
    expect(component).toBeTruthy()
  })

  it('should render className when have className prop', () => {
    const className = 'class'
    const { getByTestId } = render(<Switch className={className} />)

    const container = getByTestId('switch')

    expect(container).toBeTruthy()
    expect(container).toHaveClass('class')
  })

  it('should render change of value correctly', () => {
    const { getByTestId, container } = render(<Switch />)

    fireEvent.click(getByTestId('switch'))
    const input = container.querySelector('input')

    expect(input?.checked).toBe(true)
  })

  it('should call onChange when click on radio', () => {
    const handleOnClick = jest.fn()
    const { getByTestId } = render(<Switch onChange={handleOnClick} />)

    fireEvent.click(getByTestId('switch'))

    expect(handleOnClick).toBeCalled()
  })

  it('should not call onChange when click on step if it is disabled', () => {
    const handleOnClick = jest.fn()
    const { getByTestId } = render(<Switch onChange={handleOnClick} disabled />)

    fireEvent.click(getByTestId('switch'))

    expect(handleOnClick).not.toBeCalled()
  })
})
