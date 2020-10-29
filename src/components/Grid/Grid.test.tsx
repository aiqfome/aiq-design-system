import React from 'react'

import { render } from '../utils/test/render'

import { Grid } from '../Grid'

describe('Grid', () => {
  it('should have to render without crashing', () => {
    const component = render(<Grid />)
    expect(component).toBeTruthy()
  })

  it('should have to render a div', () => {
    const { container } = render(<Grid />)
    const div = container.querySelector('div')
    expect(div).toBeInTheDocument()
  })

  it('should have content when has children', () => {
    const { getByText } = render(<Grid>Flex!</Grid>)
    const div = getByText('Flex!')
    expect(div).toBeTruthy()
  })
})
