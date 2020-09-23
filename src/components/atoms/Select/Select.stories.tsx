import React, { useState } from 'react'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { Select } from './Select'
import { Flex } from '../Flex'

export default {
  component: Select,
  title: 'atoms/Select',
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

export const AutocompleteFalse: React.FC = () => {
  const itens = [
    { label: 'React', value: 1 },
    { label: 'CSS', value: 2 },
    { label: 'PHP', value: 3 },
    { label: 'HTML', value: 4 }
  ]
  const [selectedItem, setSelectedItem] = useState(itens[0])
  return (
    <Flex variant='fullCentralized'>
      <Select
        mr='32px'
        autoComplete={false}
        variant='outlined'
        label={text('label', 'aiq-design-system')}
        items={object('items', itens)}
      />
      <Select
        selectedItem={selectedItem}
        autoComplete={false}
        handleSelectedItemChange={({ selectedItem }) =>
          setSelectedItem(selectedItem)
        }
        label={text('label', 'aiq-design-system')}
        items={object('items', itens)}
      />
    </Flex>
  )
}
