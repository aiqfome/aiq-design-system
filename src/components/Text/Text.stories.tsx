import React from 'react'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'

import { Text } from './Text'
import { Flex } from '../Flex'

export default {
  component: Text,
  title: 'Text',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Text
      color={text('color', 'primary')}
      fontSize={number('fontSize', 22)}
      width={text('width', '100%')}
      cursor={text('cursor', '')}
      fontWeight={text('fontWeight', 'semiBold')}
      truncate={boolean('truncate', false)}
      textAlign='center'
    >
      {text('text', 'o design system do app mais fominha da internê!')}
    </Text>
  </Flex>
)

export const Truncated: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Text
      color='primary'
      fontWeight='700'
      width='180px'
      whiteSpace='nowrap'
      truncate
    >
      o texto truncado fica assim!
    </Text>
  </Flex>
)
