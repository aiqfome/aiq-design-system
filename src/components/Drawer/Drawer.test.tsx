import React from 'react'

import { Drawer } from './Drawer'
import { Text } from '../Text'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Drawer opened={true}>
        <Text>Drawer component!</Text>
      </Drawer>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
