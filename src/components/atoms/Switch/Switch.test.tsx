import React from 'react'

import { Switch } from './Switch'

import { render } from '../../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<Switch />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
