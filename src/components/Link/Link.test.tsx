import React from 'react'

import { Link } from './Link'
import { Text } from '../Text'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Link href='https://aiqfome.com/'>
        <Text>Link!</Text>
      </Link>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
