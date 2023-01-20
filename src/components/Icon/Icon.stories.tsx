import React from 'react'
import { MdHome } from 'react-icons/md'
import { text } from '@storybook/addon-knobs'

import { Icon } from './Icon'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'color',
  'children',
  'cursor',
  'variant',
  'fullHeight',
  'isClickable'
]

export default createPageExport(Icon, 'Icon', aiqProps, {
  argTypes: {
    color: {
      control: 'text'
    },
    cursor: {
      control: 'text'
    },
    fullHeight: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      options: ['auto', 'centralized', 'fullCentralized']
    },
    isClickable: { control: 'boolean' }
  }
})

export const basic: React.FC = args => (
  <Icon cursor={text('Cursor', '')} {...args}>
    <MdHome />
  </Icon>
)

export const centralized: React.FC = args => (
  <Icon variant='centralized' {...args}>
    <MdHome />
  </Icon>
)

export const fullCentralized: React.FC = args => (
  <Icon variant='fullCentralized' {...args}>
    <MdHome />
  </Icon>
)

export const cursor: React.FC = args => (
  <Icon cursor='pointer' {...args}>
    <MdHome />
  </Icon>
)
