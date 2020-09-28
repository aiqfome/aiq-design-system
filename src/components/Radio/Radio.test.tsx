import React from 'react'

import { Radio } from './Radio'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<Radio name='radio' value={true} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
