import React from 'react'
import renderer from 'react-test-renderer'

import { Divider } from './Divider'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Divider />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
