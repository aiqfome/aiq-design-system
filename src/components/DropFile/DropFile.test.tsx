import React from 'react'

import { DropFile } from './DropFile'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<DropFile />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
