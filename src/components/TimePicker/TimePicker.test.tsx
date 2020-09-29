import React from 'react'

import { render } from '../utils/test/render'

import { TimePicker } from './TimePicker'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
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
