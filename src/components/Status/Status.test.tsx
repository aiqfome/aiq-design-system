import React from 'react'
import renderer from 'react-test-renderer'

import { Status } from './Status'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Status />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
