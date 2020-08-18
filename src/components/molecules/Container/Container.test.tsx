import React from 'react'
import renderer from 'react-test-renderer'

import { Container } from './Container'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Container />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
