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
    const { getByTestId } = render(
      <Popover arrow trigger='click' content='test'>
        <div>content</div>
      </Popover>
    )

    const popoverChild = getByTestId('popover-child')
    fireEvent.click(popoverChild)

    const popoverContent = getByTestId('popover-content')
    expect(popoverContent).toBeTruthy()
  })

  it('should hide popover when click outside the content', () => {
    const { getByTestId } = render(
      <div>
        <Popover arrow trigger='click' content='test'>
          <div>content</div>
        </Popover>
      </div>
    )

    const popoverChild = getByTestId('popover-child')
    fireEvent.click(popoverChild)

    const popoverContent = getByTestId('popover-content')
    expect(popoverContent).toBeTruthy()

    fireEvent.click(popoverChild)
    expect(popoverChild).toHaveClass('hidden')
  })
})
