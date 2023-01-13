import React from 'react'

import { Grid } from './Grid'
import { Text } from '../Text'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['color', 'children']

export default createPageExport(Grid, 'Grid', aiqProps, {
  argTypes: {
    color: {
      control: 'text'
    }
  }
})

export const Basic = args => (
  <Grid {...args}>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
  </Grid>
)
Basic.args = {
  color: 'primary'
}

export const TemplateColumns = args => (
  <Grid gridTemplateColumns='1fr 2fr' {...args}>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
  </Grid>
)
TemplateColumns.args = {
  color: 'primary'
}
