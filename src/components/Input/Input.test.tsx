import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Input } from '../Input'
import { render } from '../utils/test/render'

describe('Input', () => {
  it('should have to render without crashing', () => {
    const component = render(<Input />)
    expect(component).toBeTruthy()
  })

  it("with variant 'outlined' should have 'input-outlined' id", () => {
    const { getByTestId } = render(<Input variant='outlined' />)

    const input = getByTestId('input-outlined')
    expect(input).toBeTruthy()
  })

  it("with variant 'tags' should have 'input-tags' id", () => {
    const { getByTestId } = render(<Input variant='tags' />)

    const input = getByTestId('input-tags')
    expect(input).toBeTruthy()
  })

  it('should render placeholder when have placeholder prop', () => {
    const content = 'My placeholder'
    const { getByTestId } = render(<Input placeholder={content} />)

    const input = getByTestId('input')

    expect(input).toBeTruthy()
    expect(input).toHaveAttribute('placeholder', 'My placeholder')
  })

  it('should render prefix when have prefix prop', () => {
    const prefix = <div>Prefix</div>
    const { getByText } = render(<Input prefix={prefix} />)

    const input = getByText('Prefix')
    expect(input).toBeTruthy()
  })

  it('should render sufix when have sufix prop', () => {
    const sufix = <div>Sufix</div>
    const { getByText } = render(<Input sufix={sufix} />)

    const input = getByText('Sufix')
    expect(input).toBeTruthy()
  })

  it('should render initial value correctly', () => {
    const value = 'test'
    const { getByTestId } = render(
      <Input value={value} onChange={() => undefined} />
    )

    const input = getByTestId('input')

    expect(input).toBeTruthy()
    expect(input).toHaveAttribute('value', 'test')
  })

  it('should render name when have name prop', () => {
    const content = 'name-test'
    const { getByTestId } = render(<Input name={content} />)

    const input = getByTestId('input')

    expect(input).toBeTruthy()
    expect(input).toHaveAttribute('name', 'name-test')
  })

  it('should have a error message when have error on form', () => {
    const content = 'My Error'
    const { getByTestId } = render(<Input errorForm errorMessage={content} />)

    const textContainer = getByTestId('input-error')

    expect(textContainer).toBeTruthy()
    expect(textContainer).toHaveTextContent('My Error')
  })

  it("should render label when have label prop and variant 'outlined'", () => {
    const content = 'label-test'
    const { getByTestId } = render(<Input variant='outlined' label={content} />)

    const input = getByTestId('input-label')

    expect(input).toBeTruthy()
    expect(input).toHaveTextContent('label-test')
  })

  it('should render change of value correctly', () => {
    const { getByTestId, container } = render(<Input />)

    fireEvent.change(getByTestId('input'), {
      target: { value: 'Good Day' }
    })
    const input = container.querySelector('input')

    expect(input?.value).toBe('Good Day')
  })

  it('should render change of value correctly with type number', () => {
    const { getByTestId, container } = render(<Input type='number' />)

    fireEvent.change(getByTestId('input'), {
      target: { value: 'Good Day' }
    })
    const input = container.querySelector('input')

    expect(input?.value).toBe('')

    fireEvent.change(getByTestId('input'), {
      target: { value: 444 }
    })

    expect(input?.value).toBe('444')
  })
})
