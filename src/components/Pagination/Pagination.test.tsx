import React from 'react'

import { render } from '../utils/test/render'

import { Pagination } from '../Pagination'

describe('Pagination', () => {
  it('should have to render without crashing', () => {
    const component = render(<Pagination />)
    expect(component).toBeTruthy()
  })

  // it('should not render when count is zero', () => {
  //   const component = render(<Pagination count={0} />)
  // })
  // zero pages
})
