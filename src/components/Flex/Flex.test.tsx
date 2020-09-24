import React from 'react'

import { Flex } from './Flex'
import { Text } from '../Text'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Flex>
        <Text>Flex component!</Text>
      </Flex>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
