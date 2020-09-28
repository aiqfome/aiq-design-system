import React from 'react'

import { Checkbox } from './Checkbox'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<Checkbox />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
