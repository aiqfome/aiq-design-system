import React from 'react'

import { render } from '../utils/test/render'

import { Actions } from './Actions'

describe('Actions', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Actions arrow title='title'>
        <div>content</div>
      </Actions>
    )
    expect(component).toBeTruthy()
  })

  it('should show actions content when trigger is actived', () => {
    const { getByTestId } = render(
      <div>
        <Actions arrow title='title' trigger='click'>
          <div>content</div>
        </Actions>
      </div>
    )

    const actionsChild = getByTestId('actions-child')
    actionsChild.click()

    const actionsContent = getByTestId('actions-content')
    expect(actionsContent).toBeTruthy()
  })

  it('should hide actions when click outside the content', () => {
    const { getByTestId } = render(
      <div>
        <Actions arrow title='title' trigger='click'>
          <div>content</div>
        </Actions>
      </div>
    )

    const actionsChild = getByTestId('actions-child')
    actionsChild.click()

    const actionsContent = getByTestId('actions-content')
    expect(actionsContent).toBeTruthy()

    actionsChild.click()
    expect(actionsChild).toHaveClass('hidden')
  })
})
