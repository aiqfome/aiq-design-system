import React from 'react'

import 'react-dates/initialize'
import { fireEvent } from '@testing-library/react'

import { TimePicker } from './TimePicker'
import { render } from '../utils/test/render'

describe('TimePicker', () => {
  it('should have to render without crashing', () => {
    const component = render(<TimePicker />)

    expect(component).toBeTruthy()
  })

  it('should render a default value', () => {
    const value = '10:00'
    const { getByTestId } = render(<TimePicker value={value} />)

    expect(getByTestId('timepicker').querySelector('input')?.value).toBe(value)
  })

  it('should have a error message when have error on form', () => {
    const content = 'My Error'
    const { getByTestId } = render(
      <TimePicker errorForm errorMessage={content} />
    )

    const textContainer = getByTestId('input-error')

    expect(textContainer).toBeTruthy()
    expect(textContainer).toHaveTextContent('My Error')
  })

  it('should have a text when have a placeholder prop', () => {
    const content = 'My placeholder'
    const { getByTestId } = render(<TimePicker placeholder={content} />)

    const input = getByTestId('input-container')

    expect(input).toBeTruthy()
    expect(input).toHaveAttribute('placeholder', 'My placeholder')
  })

  it('should open timepicker after trigger on input', () => {
    const { getByTestId } = render(<TimePicker />)

    const container = getByTestId('timepicker')
    fireEvent.mouseOver(container)

    const dialogBox = getByTestId('timepicker-open')
    expect(dialogBox).toBeTruthy()
  })
})
