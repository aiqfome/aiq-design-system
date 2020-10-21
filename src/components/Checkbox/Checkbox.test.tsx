import React from 'react'

import { fireEvent } from '@testing-library/react'

import { render } from '../utils/test/render'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should have to render without crashing', () => {
    const component = render(<Checkbox />)
    expect(component).toBeTruthy()
  })

  it('should have to render a input with type checkbox', () => {
    const { container } = render(<Checkbox />)
    const input = container.querySelector('input[type=checkbox]')

    expect(input).toBeInTheDocument()
  })

  it('should have to call onChange when click on checkbox', () => {
    const handleOnchange = jest.fn()

    const { getByTestId } = render(
      <Checkbox checked={true} onChange={handleOnchange} />
    )
    const checkbox = getByTestId('checkbox')

    fireEvent.click(checkbox)

    expect(handleOnchange).toHaveBeenCalled()
  })

  it('should have to call onChange when click on checkbox', () => {
    const handleOnchange = jest.fn()

    const { getByTestId } = render(
      <Checkbox disabled={true} checked={true} onChange={handleOnchange} />
    )
    const checkbox = getByTestId('checkbox')

    fireEvent.click(checkbox)

    expect(handleOnchange).not.toHaveBeenCalled()
  })

  it('should have to change checked when clicked on checkbox', () => {
    const { getByTestId } = render(<Checkbox />)
    const checkbox = getByTestId('checkbox')

    expect(checkbox.querySelector('input')?.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.querySelector('input')?.checked).toBe(true)
  })

  it('should have the same text that was passed for prop label', () => {
    const label = 'Trololo Sing Along!'
    const { getByText } = render(<Checkbox label={label} />)
    const component = getByText(label)

    expect(component).toBeTruthy()
  })
})
