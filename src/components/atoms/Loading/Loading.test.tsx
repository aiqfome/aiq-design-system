import React from 'react'

import { Loading } from './Loading'

import { render } from '../../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<Loading />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
