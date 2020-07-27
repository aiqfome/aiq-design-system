import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Grid } from './Grid';
import { Text } from '../Text';

export default {
  component: Grid,
  title: atomicDir(base)
}

export const basic = () => (
  <Grid color="primary"  >
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
  </Grid>
)

export const templateColumns = () => (
  <Grid color="primary" gridTemplateColumns='1fr 2fr' >
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
    <Text>Design System</Text>
  </Grid>
)
