import React from 'react'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'

import { Text } from './Text'

export default {
  component: Text,
  title: 'atoms/Text',
  decorators: [withKnobs]
}

export const basic: React.FC = () => (
  <Text
    color={text('color', 'primary')}
    fontSize={number('fontSize', 16)}
    cursor={text('cursor', '')}
    fontWeight={text('fontWeight', 'medium')}
  >
    {text('text', 'Aiqfome')}
  </Text>
)

export const cursor: React.FC = () => (
  <Text cursor='pointer'>Design System</Text>
)
