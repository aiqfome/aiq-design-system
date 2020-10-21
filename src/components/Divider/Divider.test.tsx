import React from 'react'

import { render } from '../utils/test/render'

import { Divider } from '../Divider'

describe('Divider', () => {
  it('should have to render without crashing', () => {
    const component = render(<Divider />)
    expect(component).toBeTruthy()
  })

  it('should have a text when has children', () => {
    const { getByTestId } = render(<Divider>Aiqfome</Divider>)
    expect(getByTestId('divider-wrapper')).toHaveTextContent('Aiqfome')
  })
})
