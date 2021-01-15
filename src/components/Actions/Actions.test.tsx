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
    const { getByTestId, container } = render(
      <Actions arrow title='title' trigger='click'>
        <div>content</div>
      </Actions>
    )

    const actionsChild = container.querySelectorAll('div')
    actionsChild[0].click()

    const actionsContent = getByTestId('actions-content')
    expect(actionsContent).toBeTruthy()
  })

  it('should hide actions when click outside the content', () => {
    const { getByTestId, container } = render(
      <Actions arrow title='title' trigger='click'>
        <div>content</div>
      </Actions>
    )

    const actionsChild = container.querySelectorAll('div')
    actionsChild[0].click()

    expect(actionsChild[0]).toHaveClass('rc-dropdown-open')

    const actionsContent = getByTestId('actions-content')
    expect(actionsContent).toBeTruthy()

    actionsChild[0].click()

    expect(actionsChild[0]).not.toHaveClass('rc-dropdown-open')
  })

  it('should call onClick when click on div inside Actions, also openning it', () => {
    const handleOnClick = jest.fn()
    const { container, getByTestId } = render(
      <Actions arrow title='title' trigger='click'>
        <div onClick={handleOnClick}>content</div>
      </Actions>
    )

    const actionsChild = container.querySelectorAll('div')
    actionsChild[0].click()

    expect(actionsChild[0]).toHaveClass('rc-dropdown-open')

    const actionsContent = getByTestId('actions-content')
    expect(actionsContent).toBeTruthy()

    expect(handleOnClick).toBeCalled()
  })
})
