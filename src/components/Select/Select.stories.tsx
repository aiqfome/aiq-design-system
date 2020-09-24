import React from 'react'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { Select } from './Select'

export default {
  component: Select,
  title: 'Select',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => {
  const itens = ['React', 'CSS', 'PHP', 'HTML']

  function handleClickItemSelect(item) {
    console.log(item)
  }

  return (
    <Select
      handleSelectedItemChange={handleClickItemSelect}
      placeholder={text('label', 'aiq-design-system')}
      items={object('items', itens)}
    />
  )
}

export const Outlined: React.FC = () => {
  const itens = ['React', 'CSS', 'PHP', 'HTML']

  return (
    <Select
      variant='outlined'
      label={text('label', 'aiq-design-system')}
      items={object('items', itens)}
    />
  )
}
