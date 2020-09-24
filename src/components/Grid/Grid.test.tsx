import React from 'react'

import { Grid } from './Grid'
import { Text } from '../Text'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Grid>
        <Text>Grid component!</Text>
      </Grid>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
