import React from 'react'
import renderer from 'react-test-renderer'

import { Avatar } from './Avatar'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Avatar alt='avatar component!' />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
