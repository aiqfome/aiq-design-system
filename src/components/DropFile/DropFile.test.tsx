import React from 'react'

import { DropFile } from './DropFile'
import { render } from '../utils/test/render'

describe('DropFile', () => {
  it('should have to render without crashing', () => {
    const component = render(<DropFile />)
    expect(component).toBeTruthy()
  })
})
