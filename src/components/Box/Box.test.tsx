import React from 'react'

import { render } from '../utils/test/render'

import { Box } from '../Box'

describe('Box', () => {
  it('should have to render without crashing', () => {
    const component = render(<Box />)
    expect(component).toBeTruthy()
  })

  it('should have contnet when has children', () => {
    const { getByTestId } = render(<Box>Aiqfome</Box>)
    expect(getByTestId('box')).toHaveTextContent('Aiqfome')
  })
})
