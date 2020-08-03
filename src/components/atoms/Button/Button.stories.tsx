import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { AiOutlineGithub } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'

import { Button } from './Button'

export default {
  component: Button,
  title: 'atoms/Button',
  decorators: [withKnobs]
}

export const basic: React.FC = () => (
  <Button
    variant={select(
      'Variant',
      { Text: 'text', Outline: 'outlined', Contained: 'contained' },
      'text'
    )}
    palette={select(
      'palette',
      { Primary: 'primary', Secondary: 'secondary' },
      'primary'
    )}
  >
    {text('Label', 'Hello Storybook')}
  </Button>
)

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

export const fab: React.FC = () => (
  <Button palette='primary' variant='fabWithText'>
    Design System
  </Button>
)

export const fabWithPrefix: React.FC = () => (
  <Button
    palette='primary'
    prefix={<MdAdd size={24} color='#FFF' />}
    variant='fabWithText'
  >
    Design System
  </Button>
)

export const fabWithOutChildren: React.FC = () => (
  <Button
    palette='primary'
    prefix={<MdAdd size={24} color='#FFF' />}
    variant='fab'
  />
)
