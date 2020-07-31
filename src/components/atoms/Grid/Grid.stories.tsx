import React from 'react'

import { Grid } from './Grid'
import { Text } from '../Text'

export default {
  component: Grid,
  title: 'atoms/Grid'
}

export const basic: React.FC = () => (
  <Grid color='primary'>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
  </Grid>
)

export const templateColumns: React.FC = () => (
  <Grid color='primary' gridTemplateColumns='1fr 2fr'>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
  </Grid>
)
