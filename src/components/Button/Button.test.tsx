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

  it('should have classes __button-text and __button-text-primary when variant and palette is null', () => {
    const { getByRole } = render(<Button>Test</Button>)

    expect(getByRole('button')).toHaveClass('__button-text')
    expect(getByRole('button')).toHaveClass('__button-text-primary')
  })

  it('should have class __button-text when variant equal text', () => {
    const { getByRole } = render(
      <Button variant='text' palette='primary'>
        Test
      </Button>
    )

    expect(getByRole('button')).toHaveClass('__button-text')
  })

  it('should have class __button-contained when variant equal contained', () => {
    const { getByRole } = render(<Button variant='contained'>Test</Button>)

    const button = getByRole('button')

    expect(button).toHaveClass('__button-contained')
    expect(button).toHaveClass('__button-contained-primary')
  })

  it('should have class __button-outlined when variant equal outlined', () => {
    const { getByRole } = render(<Button variant='outlined'>Test</Button>)

    const button = getByRole('button')

    expect(button).toHaveClass('__button-outlined')
    expect(button).toHaveClass('__button-outlined-primary')
  })

  it('should have class __button-fab when variant equal fab', () => {
    const { getByRole } = render(<Button variant='fab'>Test</Button>)

    const button = getByRole('button')

    expect(button).toHaveClass('__button-fab')
    expect(button).toHaveClass('__button-fab-primary')
  })

  it('should have class __button-icon when variant equal icon', () => {
    const { getByRole } = render(<Button variant='icon'>Test</Button>)

    const button = getByRole('button')

    expect(button).toHaveClass('__button-icon')
    expect(button).toHaveClass('__button-icon-primary')
  })
})
