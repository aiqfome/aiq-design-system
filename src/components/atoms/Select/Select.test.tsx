import React from 'react'

import { Select } from './Select'

import { render } from '../../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<Select />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
