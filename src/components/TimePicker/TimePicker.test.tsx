import React from 'react'
import renderer from 'react-test-renderer'

import { TimePicker } from './TimePicker'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <TimePicker
        onChange={value => console.log(value)}
        placeholder='aiqfome'
        maxWidth='120px'
        value='12:30'
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
