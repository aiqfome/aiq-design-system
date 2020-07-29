import React from 'react'

import { Text } from './Text'

export default {
  component: Text,
  title: 'atoms/Text'
}

export const basic: React.FC = () => <Text>Design System</Text>

export const cursor: React.FC = () => (
  <Text cursor='pointer'>Design System</Text>
)
