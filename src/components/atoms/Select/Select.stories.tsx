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
  const itens = ['React', 'CSS', 'PHP', 'HTML']
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
        autoComplete={false}
        selectedItem={selectedItem}
        handleSelectedItemChange={({ selectedItem }) =>
          setSelectedItem(selectedItem)
        }
        label={text('label', 'aiq-design-system')}
        items={object('items', itens)}
      />
    </Flex>
  )
}
