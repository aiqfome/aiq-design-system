import React from 'react'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'

import { Text } from './Text'
import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['cursor', 'truncate', 'whiteSpace']

export default createPageExport(Text, 'Text', aiqProps, {
  argTypes: {
    cursor: { control: 'text' },
    truncate: { control: 'boolean' },
    whiteSpace: { control: 'select', options: ['nowrap', 'normal', 'pre'] }
  }
})

export const Basic = args => (
  <Flex variant='fullCentralized'>
    <Text
      color={text('color', 'primary')}
      fontSize={number('fontSize', 22)}
      width={text('width', '100%')}
      fontWeight={text('fontWeight', 'semiBold')}
      textAlign='center'
      {...args}
    >
      {text('text', 'o design system do app mais fominha da internê!')}
    </Text>
  </Flex>
)
Basic.args = {
  truncate: false,
  cursor: ''
}

export const Truncated = args => (
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
Truncated.args = {
  truncate: true
}
