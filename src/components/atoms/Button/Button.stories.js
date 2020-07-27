import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { AiOutlineGithub } from 'react-icons/ai'

import { Button } from './Button'

export default {
  component: Button,
  title: atomicDir(base)
}

export const basic = () => <Button >Design System</Button>

export const textPrimary = () => <Button palette="primary" variant="text" >Design System</Button>

export const textSecondary = () => <Button palette="secondary" variant="text" >Design System</Button>

export const containedPrimary = () => <Button palette="primary" variant="contained">Design System</Button>

export const outlinedPrimary = () => <Button palette="primary" variant="outlined">Design System</Button>

export const neutral = () => <Button variant="neutral">Design System</Button>

export const prefix = () => <Button palette="primary" prefix={(<AiOutlineGithub/>)} variant="contained">Design System</Button>

export const sufix = () => <Button palette="primary" sufix={(<AiOutlineGithub/>)} variant="contained">Design System</Button>

