import React from 'react'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { Select } from './Select'

export default {
  component: Select,
  title: 'atoms/Select',
  decorators: [withKnobs]
}

export const basic: React.FC = () => {
  const itens = ['React', 'CSS', 'PHP', 'HTML']
  return (
    <Select
      label={text('label', 'aiq-design-system')}
      items={object('items', itens)}
    />
  )
}
