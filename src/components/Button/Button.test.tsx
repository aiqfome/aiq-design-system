import React from 'react'

import { Button } from './Button'
import { Text } from '../Text'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Button>
        <Text>Button component!</Text>
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
