import React from 'react'

import { Input } from './Input'
import { Button } from '../Button'

export default {
  component: Input,
  title: 'atoms/Input'
}

export const basic: React.FC = () => <Input label='Aiqfome' />

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
