import React from 'react'

import { Status } from '../Status'
import { render } from '../utils/test/render'

describe('Status', () => {
  it('should have to render without crashing', () => {
    const component = render(<Status>text</Status>)

    expect(component).toBeTruthy()
  })

  it('should have content when has children', () => {
    const { getByText } = render(<Status>text</Status>)
    const div = getByText('text')
    expect(div).toBeTruthy()
  })
})
