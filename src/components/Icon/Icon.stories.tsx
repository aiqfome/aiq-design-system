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

export const basic: React.FC = () => (
  <Icon cursor={text('Cursor', '')}>
    <MdHome />
  </Icon>
)

export const centralized: React.FC = () => (
  <Icon variant='centralized'>
    <MdHome />
  </Icon>
)

export const fullCentralized: React.FC = () => (
  <Icon variant='fullCentralized'>
    <MdHome />
  </Icon>
)

export const cursor: React.FC = () => (
  <Icon cursor='pointer'>
    <MdHome />
  </Icon>
)
