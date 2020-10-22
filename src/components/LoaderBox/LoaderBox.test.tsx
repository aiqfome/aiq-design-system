import React from 'react'

import { render } from '../utils/test/render'

import { LoaderBox } from '../LoaderBox'

describe('LoaderBox', () => {
  it('should have to render without crashing', () => {
    const component = render(<LoaderBox />)
    expect(component).toBeTruthy()
  })
})
