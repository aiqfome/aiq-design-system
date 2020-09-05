import React from 'react'

import { render } from '../../utils/test/render'

import { Basic } from './Tooltip.stories'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<Basic />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
