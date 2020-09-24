import React from 'react'

import { render } from '../utils/test/render'
import { Pagination } from './Pagination'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<Pagination count={10} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
