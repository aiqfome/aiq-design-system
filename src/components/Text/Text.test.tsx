import React from 'react'

import { Text } from '../Text'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<Text>Text component!</Text>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
