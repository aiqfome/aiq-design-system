import React from 'react'

import { TableHead } from './TableHead'
import { render } from '../utils/test/render'

describe('TableHead', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <TableHead>o design system do app mais fominha da internê!</TableHead>
    )
    expect(component).toBeTruthy()
  })

  it('should have content when has children', () => {
    const { container } = render(
      <TableHead>o design system do app mais fominha da internê!</TableHead>
    )

    expect(container).toHaveTextContent(
      'o design system do app mais fominha da internê!'
    )
  })
})
