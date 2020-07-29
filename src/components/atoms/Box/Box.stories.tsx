import React from 'react'

import { Box } from './Box'

export default {
  component: Box,
  title: 'atoms/Box'
}

export const basic: React.FC = () => (
  <Box marginBottom={10} color='blue'>
    Design System
  </Box>
)
