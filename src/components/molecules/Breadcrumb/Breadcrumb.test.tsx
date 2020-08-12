import React from 'react'
import renderer from 'react-test-renderer'

import { Breadcrumb } from './Breadcrumb'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Breadcrumb />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
