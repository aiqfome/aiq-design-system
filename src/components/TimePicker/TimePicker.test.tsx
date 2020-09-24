import React from 'react'
import renderer from 'react-test-renderer'

import { TimePicker } from './TimePicker'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<TimePicker />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
