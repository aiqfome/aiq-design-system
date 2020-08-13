import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { Input } from './Input'
import { Button } from '../Button'

export default {
  component: Input,
  title: 'atoms/Input',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => (
  <Input
    value={text('value', '')}
    errorForm={boolean('errorForm', false)}
    errorMessage={text('errorMessage', 'message error')}
    label={text('label', 'aiqfome')}
    type={select(
      'Type',
      {
        Text: 'text',
        Password: 'password'
      },
      'text'
    )}
  />
)

export const Password: React.FC = () => (
  <Input label='Aiqfome' type='password' />
)

export const ErrorMessage: React.FC = () => (
  <Input label='Aiqfome' errorForm={true} errorMessage='Not Allowed' />
)

export const WithValue: React.FC = () => {
  const value = 'hamburger'
  return <Input label='Aiqfome' value={value} />
}

export const Sufix: React.FC = () => (
  <Input label='Aiqfome' sufix={<Button mx={10}>Search</Button>} />
)
