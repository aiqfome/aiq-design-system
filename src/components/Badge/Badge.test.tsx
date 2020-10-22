import React from 'react'

import { render } from '../utils/test/render'

import { Badge } from './Badge'

describe('Badge', () => {
  it('should have to render without crashing', () => {
    const component = render(<Badge>hello</Badge>)
    expect(component).toBeTruthy()
  })

  it('should have text content equal prop count', () => {
    const { getByTestId } = render(<Badge count={100}>test</Badge>)
    expect(getByTestId('badge')).toHaveTextContent('100')
  })

  it('should have text content equal children when count is null', () => {
    const { getByTestId } = render(<Badge>olá</Badge>)
    expect(getByTestId('badge')).toHaveTextContent('olá')
  })

  it('should have value content equal to overflowCount, when overflowCount is not null and is less than count', () => {
    const overflowCount = 50
    const { getByTestId } = render(
      <Badge overflowCount={overflowCount} count={500} />
    )
    expect(getByTestId('badge')).toHaveTextContent(`${overflowCount}+`)
    expect(getByTestId('badge-tooltip')).toHaveTextContent(`500`)
  })

  it('should have value content less than overflowCount, when overflowCount is not null and is bigger then count', () => {
    const overflowCount = 500
    const { getByTestId } = render(
      <Badge overflowCount={overflowCount} count={50} />
    )
    expect(getByTestId('badge')).toHaveTextContent(`50`)
  })

  it('should have class __badge-label when variant equal label', () => {
    const { getByTestId } = render(<Badge variant='label' count={50} />)
    expect(getByTestId('badge')).toHaveClass('__badge-label')
  })

  it('should have class __badge-default when variant equal default or null', () => {
    const { getByTestId } = render(<Badge count={50} />)
    expect(getByTestId('badge')).toHaveClass('__badge-default')
  })
})
