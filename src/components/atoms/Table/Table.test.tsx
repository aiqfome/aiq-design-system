import React from 'react'
import renderer from 'react-test-renderer'

import { Table } from './Table'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Table />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
