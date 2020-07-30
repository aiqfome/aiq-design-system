import React from 'react'
import { MdHome } from 'react-icons/md'

import { Icon } from './Icon'

export default {
  component: Icon,
  title: 'atoms/Icon'
}

export const basic: React.FC = () => (
  <Icon>
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
