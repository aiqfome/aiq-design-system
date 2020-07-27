import React from 'react'
import { MdHome } from 'react-icons/md';

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Icon } from './Icon'

export default {
  component: Icon,
  title: atomicDir(base)
}

export const basic = () => <Icon><MdHome/></Icon>

export const centralized = () => <Icon variant="centralized" ><MdHome/></Icon>

export const fullCentralized = () => <Icon variant="fullCentralized"><MdHome/></Icon>

export const cursor = () => <Icon cursor="pointer" ><MdHome/></Icon>
