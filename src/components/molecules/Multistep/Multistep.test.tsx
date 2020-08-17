import React from 'react'
import renderer from 'react-test-renderer'

import { Multistep } from './Multistep'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Multistep />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
