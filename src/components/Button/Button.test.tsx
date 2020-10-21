import React from 'react'

import { fireEvent } from '@testing-library/react'

import { render } from '../utils/test/render'

import { Button } from './Button'

describe('Button', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Button variant='contained' palette='primary'>
        Test
      </Button>
    )
    expect(component).toBeTruthy()
  })

  it('should have to render a button', () => {
    const { container } = render(<Button>Test</Button>)
    const button = container.querySelector('button')

    expect(button).toBeInTheDocument()
  })

  it('should have to call onClick when click on button', () => {
    const handleOnClick = jest.fn()

    const { getByRole } = render(<Button onClick={handleOnClick}>Test</Button>)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(handleOnClick).toHaveBeenCalled()
  })

  it('should not have to call onClick when click on button disabled', () => {
    const handleOnClick = jest.fn()

    const { getByRole } = render(
      <Button disabled={true} onClick={handleOnClick}>
        Test
      </Button>
    )
    const button = getByRole('button')

    fireEvent.click(button)

    expect(handleOnClick).not.toHaveBeenCalled()
  })

  it('should not have to call onClick when click on button disabled', () => {
    const handleOnClick = jest.fn()

    const { getByRole } = render(
      <Button disabled={true} onClick={handleOnClick}>
        Test
      </Button>
    )
    const button = getByRole('button')

    fireEvent.click(button)

    expect(handleOnClick).not.toHaveBeenCalled()
  })
})
