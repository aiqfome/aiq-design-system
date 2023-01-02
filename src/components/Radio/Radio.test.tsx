import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Radio } from '../Radio'
import { render } from '../utils/test/render'
import { Flex } from '../Flex'

describe('Radio', () => {
  it('should have to render without crashing', () => {
    const component = render(<Radio value='test' name='radio' />)
    expect(component).toBeTruthy()
  })

  it('should render label when have label prop', () => {
    const content = 'My label'
    const { getByTestId } = render(
      <Radio value='test' name='radio' label={content} />
    )

    const radio = getByTestId('radio-container')

    expect(radio).toBeTruthy()
    expect(radio).toHaveTextContent('My label')
  })

  it('should render label component when label component is provided', () => {
    const { getByTestId, getByText } = render(
      <Radio value='test' name='radio' label={<Flex>aiqfome</Flex>} />
    )

    const radio = getByTestId('radio-container')
    const labelComponent = getByText(/aiqfome/i)

    expect(radio).toBeTruthy()
    expect(labelComponent).toBeInTheDocument()
  })

  it('should render initial value correctly', () => {
    const value = 'test'
    const { getByTestId } = render(
      <Radio name='radio' value={value} onChange={() => undefined} />
    )

    const radio = getByTestId('radio-input')

    expect(radio).toBeTruthy()
    expect(radio).toHaveAttribute('value', 'test')
  })

  it('should render name correctly', () => {
    const name = 'radio'
    const { getByTestId } = render(
      <Radio name={name} value='test' onChange={() => undefined} />
    )

    const radio = getByTestId('radio-input')

    expect(radio).toBeTruthy()
    expect(radio).toHaveAttribute('name', 'radio')
  })

  it('should render change of value correctly', () => {
    const { getByTestId, container } = render(
      <Radio name='radio' value='test' />
    )

    fireEvent.click(getByTestId('radio-input'))
    const input = container.querySelector('input')

    expect(input?.checked).toBe(true)
  })

  it('should call onChange when click on radio', () => {
    const handleOnClick = jest.fn()
    const { getByTestId } = render(
      <Radio name='radio' value='test' onChange={handleOnClick} />
    )

    fireEvent.click(getByTestId('radio-input'))

    expect(handleOnClick).toBeCalled()
  })

  it('should not call onChange when click on step if it is disabled', () => {
    const handleOnClick = jest.fn()
    const { getByTestId } = render(
      <Radio name='radio' value='test' onChange={handleOnClick} disabled />
    )

    fireEvent.click(getByTestId('radio-input'))

    expect(handleOnClick).not.toBeCalled()
  })
})
