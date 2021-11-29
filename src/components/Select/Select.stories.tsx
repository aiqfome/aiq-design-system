import React, { useState } from 'react'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { Select } from './Select'
import { Flex } from '../Flex'
import { Button } from '../Button'

import { MdSearch } from 'react-icons/md'

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

export const AutocompleteFalse: React.FC = () => {
  const itens = [
    { name: 'React', id: 1 },
    { name: 'CSS', id: 2 },
    { name: 'PHP', id: 3 },
    { name: 'HTML', id: 4 }
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

export const WithSufix: React.FC = () => {
  const itens = [
    { name: 'React', id: 1 },
    { name: 'CSS', id: 2 },
    { name: 'PHP', id: 3 },
    { name: 'HTML', id: 4 }
  ]
  const [selectedItem, setSelectedItem] = useState(itens[0])
  return (
    <Flex variant='fullCentralized'>
      <Select
        mr='32px'
        variant='outlined'
        label={text('label', 'aiq-design-system')}
        items={object('items', itens)}
        sufix={<MdSearch />}
      />
      <Select
        selectedItem={selectedItem}
        handleSelectedItemChange={({ selectedItem }) =>
          setSelectedItem(selectedItem)
        }
        label={text('label', 'aiq-design-system')}
        items={object('items', itens)}
        sufix={<MdSearch />}
      />
    </Flex>
  )
}

export const Loading: React.FC = () => {
  const itens = [
    { name: 'React', id: 1 },
    { name: 'CSS', id: 2 },
    { name: 'PHP', id: 3 },
    { name: 'HTML', id: 4 }
  ]
  const [selectedItem, setSelectedItem] = useState(itens[0])
  return (
    <Flex variant='fullCentralized'>
      <Select
        mr='32px'
        variant='outlined'
        isLoading={true}
        label={text('label', 'aiq-design-system')}
        items={object('items', itens)}
        sufix={<MdSearch />}
      />
      <Select
        selectedItem={selectedItem}
        isLoading={true}
        handleSelectedItemChange={({ selectedItem }) =>
          setSelectedItem(selectedItem)
        }
        label={text('label', 'aiq-design-system')}
        items={object('items', itens)}
        sufix={<MdSearch />}
      />
    </Flex>
  )
}

export const EmptyElement: React.FC = () => {
  const items = [
    { name: 'React', id: 1 },
    { name: 'CSS', id: 2 },
    { name: 'PHP', id: 3 },
    { name: 'HTML', id: 4 }
  ]

  const [newItem, setNewItem] = useState<{ id: number; name: string }>()

  const handleNewItem = (name: string) => {
    if (!items.some(item => item.name === name)) {
      const newItem = { id: 5, name }
      setNewItem(newItem)
    }
  }

  const addNewItem = () => {
    console.log(newItem)
  }

  const renderAddNew = (
    <Button onClick={addNewItem}>{`Adicionar o item ${newItem?.name}`}</Button>
  )
  return (
    <Flex variant='fullCentralized'>
      <Select
        mr='32px'
        variant='outlined'
        emptyElement={renderAddNew}
        onChangeTextInput={handleNewItem}
        label={text('label', 'Preenchido')}
        items={object('items', items)}
        sufix={<MdSearch />}
      />
      <Select
        variant='outlined'
        emptyElement={renderAddNew}
        onChangeTextInput={handleNewItem}
        label={text('label', 'Vazio')}
        items={[]}
        sufix={<MdSearch />}
      />
    </Flex>
  )
}
