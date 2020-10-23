import React from 'react'

import { render } from '../utils/test/render'

import { Loading } from '../Loading'

describe('Loading', () => {
  it('should have to render without crashing', () => {
    const component = render(<Loading />)
    expect(component).toBeTruthy()
  })

  it('should have to render a svg', () => {
    const { container } = render(<Loading />)

    const svg = container.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })
})
