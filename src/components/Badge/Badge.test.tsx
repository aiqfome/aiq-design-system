import React from 'react'
import renderer from 'react-test-renderer'

import { Badge } from './Badge'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Badge />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
