import React from 'react'
import renderer from 'react-test-renderer'

import { Sidebar } from './Sidebar'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Sidebar />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
