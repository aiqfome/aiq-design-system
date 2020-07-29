import React from 'react'

import { AiOutlineGithub } from 'react-icons/ai'

import { Button } from './Button'

export default {
  component: Button,
  title: 'atoms/Button'
}

export const basic: React.FC = () => <Button>Design System</Button>

export const textPrimary: React.FC = () => (
  <Button palette='primary' variant='contained'>
    Design System
  </Button>
)

export const textSecondary: React.FC = () => (
  <Button palette='secondary' variant='text'>
    Design System
  </Button>
)

export const containedPrimary: React.FC = () => (
  <Button palette='primary' variant='contained'>
    Design System
  </Button>
)

export const outlinedPrimary: React.FC = () => (
  <Button palette='primary' variant='outlined'>
    Design System
  </Button>
)

export const neutral: React.FC = () => (
  <Button variant='neutral'>Design System</Button>
)

export const prefix: React.FC = () => (
  <Button palette='primary' prefix={<AiOutlineGithub />} variant='contained'>
    Design System
  </Button>
)

export const sufix: React.FC = () => (
  <Button palette='primary' sufix={<AiOutlineGithub />} variant='contained'>
    Design System
  </Button>
)
