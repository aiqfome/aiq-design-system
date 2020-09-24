import React from 'react'

import { LoaderBox } from '../LoaderBox'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<LoaderBox />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
