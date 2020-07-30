import React from 'react'

import { Input } from './Input'
import { Text } from '../Text'

import { render } from '../../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Input>
        <Text>Input component!</Text>
      </Input>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
