import React from 'react'

import { Table } from './Table'
import { Flex } from '../Flex'
import { Badge } from '../Badge'
import { Container } from '../Container'

import { createPageExport } from '../../utils/storybook'

const renderBadge = value => {
  return (
    <Badge variant='label' backgroundColor='primary'>
      {value}
    </Badge>
  )
}

const data = [
  {
    firstName: 'Joe',
    lastName: 'Dae',
    age: '20',
    friends: '0',
    place: 'casa da mãe joana',
    job: 'desenvolvedor'
  },
  {
    firstName: 'Tom',
    lastName: 'Tompson',
    age: '40',
    friends: '1000',
    place: 'não sabemos com certeza',
    job: 'contador'
  },
  {
    firstName: 'Max',
    lastName: 'Maximun',
    age: '24',
    friends: '200',
    place: 'não sei, qualquer lugar',
    job: 'design',
    teste: 'teste'
  }
]

const columns = [
  {
    name: 'nome', // text/name of column
    accessor: 'firstName' // used as index in data array
  },
  {
    name: 'sobrenome',
    accessor: 'lastName'
  },
  {
    name: 'idade',
    align: 'center',
    accessor: 'age',
    renderCell: renderBadge // special render to data value (value, rowValues) => newValue
  },
  {
    name: 'amigos',
    align: 'center', // used for text-align ('left', 'center', 'right', 'justify')
    accessor: 'friends'
  },
  {
    name: 'lugar preferido',
    width: '150px', // you can use other size props (maxWidth, minWidth, etc..)
    wrap: true, // used to add (...) and wrap text based on width
    accessor: 'place'
  },
  {
    name: 'cargo',
    align: 'center',
    accessor: 'job'
  }
]

const aiqProps = [
  'scroll',
  'data',
  'onHoverRow',
  'columns',
  'hoverable',
  'renderExpanded',
  'onClickRow',
  'expandedRowRender',
  'onRowBackground'
]

export default createPageExport(Table, 'Table', aiqProps, {
  argTypes: {
    hoverable: { control: 'boolean' },
    renderExpanded: { control: 'boolean' },
    data: { control: 'object' },
    columns: { control: 'object' },
    scroll: { contorl: 'text' }
  },
  args: {
    data,
    columns
  }
})

export const Basic = args => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table {...args} />
    </Flex>
  )
}
Basic.args = {
  hoverable: false
}

export const WithScroll = args => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table {...args} />
    </Flex>
  )
}
WithScroll.args = {
  scroll: '1000px'
}

export const WithExpandedRow = args => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table {...args} expandedRowRender={row => `eu amo ser ${row.job}`} />
    </Flex>
  )
}

export const WithDefaultExpandedRow = args => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table
        {...args}
        onRowBackground={row => (row.age > 21 ? 'lightGrey' : '')}
        expandedRowRender={row => (row.age > 21 ? `eu amo ser ${row.job}` : '')}
      />
    </Flex>
  )
}
WithDefaultExpandedRow.args = {
  renderExpanded: true
}

export const WithClickAction = args => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table
        {...args}
        onClickRow={row => console.log('todas as infos da row:', row)}
      />
    </Flex>
  )
}

export const WithContainer = args => {
  return (
    <Container title='My Table!'>
      <Flex flex={1} flexDirection='column' m='24px'>
        <Table {...args} />
      </Flex>
    </Container>
  )
}
