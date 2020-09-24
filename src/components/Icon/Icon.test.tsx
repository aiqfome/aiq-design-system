import React from 'react'

import { Icon } from './Icon'
import { Text } from '../Text'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Icon>
        <Text>Icon component!</Text>
      </Icon>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
