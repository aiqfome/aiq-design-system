import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Tooltip } from './Tooltip'
import { render } from '../utils/test/render'

describe('Tooltip', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Tooltip body='body'>
        <div>content</div>
      </Tooltip>
    )
    expect(component).toBeTruthy()
  })

  it('should have content when has children', () => {
    const { getByText } = render(
      <Tooltip body='body'>
        <div>content</div>
      </Tooltip>
    )

    const div = getByText('content')
    expect(div).toBeTruthy()
  })

  it('should show tooltip content when trigger is actived', () => {
    const { getByTestId } = render(
      <div>
        <Tooltip body='title'>
          <div>content</div>
        </Tooltip>
      </div>
    )

    const tooltipChild = getByTestId('tooltip-child')
    fireEvent.mouseEnter(tooltipChild)

    const tooltipContent = getByTestId('tooltip-content')
    expect(tooltipContent).toBeTruthy()
  })
})
