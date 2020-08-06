import React from 'react'
import renderer from 'react-test-renderer'

import { Pagination } from './Pagination'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Pagination count={10} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
