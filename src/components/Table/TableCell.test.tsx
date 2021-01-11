import React from 'react'

import { TableCell } from './TableCell'
import { render } from '../utils/test/render'

describe('TableCell', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <TableCell>o design system do app mais fominha da internê!</TableCell>
    )
    expect(component).toBeTruthy()
  })

  it('should have content when has children', () => {
    const { container } = render(
      <TableCell>o design system do app mais fominha da internê!</TableCell>
    )

    expect(container).toHaveTextContent(
      'o design system do app mais fominha da internê!'
    )
  })

  it('should have colspan if it is defined', () => {
    const { getByTestId } = render(
      <TableCell colspan={4}>
        o design system do app mais fominha da internê!
      </TableCell>
    )

    expect(getByTestId('table-cell')).toHaveAttribute('colspan', '4')
  })
})
