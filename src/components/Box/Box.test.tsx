import React from 'react'
import renderer from 'react-test-renderer'

import { Box } from './Box'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Box />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
