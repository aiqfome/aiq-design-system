import React from 'react'

import { Popover } from './Popover'
import { render } from '../utils/test/render'
import { fireEvent } from '@testing-library/react'

describe('Popover', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Popover arrow>
        <div>content</div>
      </Popover>
    )
    expect(component).toBeTruthy()
  })

  it('should show popover content when trigger is actived', () => {
    const { container, getByTestId } = render(
      <Popover arrow trigger='click' content='test'>
        <div>content</div>
      </Popover>
    )

    const popoverChild = container.querySelectorAll('div')
    fireEvent.click(popoverChild[0])

    const popoverContent = getByTestId('popover-content')
    expect(popoverContent).toBeTruthy()
  })

  it('should hide popover when click outside the content', () => {
    const { container, getByTestId } = render(
      <Popover arrow trigger='click' content='test'>
        <div>content</div>
      </Popover>
    )

    const popoverChild = container.querySelectorAll('div')
    fireEvent.click(popoverChild[0])

    expect(popoverChild[0]).toHaveClass('rc-dropdown-open')
    const popoverContent = getByTestId('popover-content')
    expect(popoverContent).toBeTruthy()

    fireEvent.click(popoverChild[0])
    expect(popoverChild[0]).not.toHaveClass('rc-dropdown-open')
  })

  it('should call onClick when click on div inside Popover, also openning it', () => {
    const handleOnClick = jest.fn()
    const { container, getByTestId } = render(
      <Popover arrow trigger='click' content='test'>
        <div onClick={handleOnClick}>content</div>
      </Popover>
    )

    const popoverChild = container.querySelectorAll('div')
    fireEvent.click(popoverChild[0])

    expect(popoverChild[0]).toHaveClass('rc-dropdown-open')

    const popoverContent = getByTestId('popover-content')
    expect(popoverContent).toBeTruthy()

    expect(handleOnClick).toBeCalled()
  })
})
