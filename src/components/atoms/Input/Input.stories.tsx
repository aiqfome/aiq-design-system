import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Input } from './Input'
import { Button } from '../Button'

export default {
  component: Input,
  title: 'atoms/Input',
  decorators: [withKnobs]
}

export const basic: React.FC = () => (
  <Input
    value={text('value', '')}
    errorForm={boolean('errorForm', false)}
    errorMessage={text('errorMessage', 'message error')}
    label={text('label', 'aiqfome')}
  />
)

export const errorMessage: React.FC = () => (
  <Input label='Aiqfome' errorForm={true} errorMessage='Not Allowed' />
)

export const withValue: React.FC = () => {
  const value = 'hamburger'
  return <Input label='Aiqfome' value={value} />
}

export const sufix: React.FC = () => (
  <Input label='Aiqfome' sufix={<Button mx={10}>Search</Button>} />
)
