import React from 'react'

import { TableRow } from './TableRow'
import { render } from '../utils/test/render'

describe('TableRow', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <TableRow>o design system do app mais fominha da internê!</TableRow>
    )
    expect(component).toBeTruthy()
  })

  it('should have content when has children', () => {
    const { container } = render(
      <TableRow>o design system do app mais fominha da internê!</TableRow>
    )

    expect(container).toHaveTextContent(
      'o design system do app mais fominha da internê!'
    )
  })
})
