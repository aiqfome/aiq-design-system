import React from 'react'
import moment from 'moment'

import 'react-dates/initialize'
import { fireEvent } from '@testing-library/react'

import { DatePicker } from './DatePicker'
import { render } from '../utils/test/render'

describe('DatePicker', () => {
  it('should have to render without crashing', () => {
    const component = render(<DatePicker />)

    expect(component).toBeTruthy()
  })

  it('should render a default value', () => {
    const value = moment()
    const date = value.format('DD/MMMM/YYYY')
    const { getByTestId } = render(<DatePicker value={[value]} />)

    expect(
      getByTestId('datepicker-single').querySelector('span')
    ).toHaveTextContent(date)
  })

  it('should render a default value with range variant', () => {
    const value = moment()
    const date = value.format('DD/MM - DD/MM')
    const { getByTestId } = render(
      <DatePicker variant='range' value={[value, value]} />
    )

    expect(
      getByTestId('datepicker-range').querySelector('span')
    ).toHaveTextContent(date)
  })

  it('should have a error message when have error on form', () => {
    const content = 'My Error'
    const { getByTestId } = render(
      <DatePicker errorForm errorMessage={content} />
    )

    const textContainer = getByTestId('datepicker-error')

    expect(textContainer).toBeTruthy()
    expect(textContainer).toHaveTextContent('My Error')
  })

  it('should have a text when have a placeholder prop', () => {
    const content = 'My placeholder'
    const { getByTestId } = render(<DatePicker placeholder={content} />)

    const textContainer = getByTestId('datepicker-placeholder')

    expect(textContainer).toBeTruthy()
    expect(textContainer).toHaveTextContent('My placeholder')
  })

  it('should open datepicker after clicking on input', () => {
    const { getByTestId } = render(<DatePicker />)

    const container = getByTestId('datepicker-single-input')
    fireEvent.click(container)

    const dialogBox = getByTestId('datepicker-open')
    expect(dialogBox).toBeTruthy()
  })
})
