import React from 'react'

import { Box } from './Box'
import { createPageExport } from '../../utils/storybook'

export default createPageExport(Box, 'Box', [
  'onClick',
  'refBox',
  'className',
  'children'
])

export const basic: React.FC = args => (
  <Box marginBottom={10} color='blue' {...args}>
    Design System
  </Box>
)
