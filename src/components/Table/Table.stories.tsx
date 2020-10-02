import React from 'react'

import { Table } from './Table'
import { Flex } from '../Flex'
import { Badge } from '../Badge'
import { Container } from '../Container'

export default {
  component: Table,
  title: 'Table'
}

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
    job: 'design'
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

export const Basic: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table hoverable={false} data={data} columns={columns} />
    </Flex>
  )
}

export const WithScroll: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table scroll='1000px' data={data} columns={columns} />
    </Flex>
  )
}

export const WithExpandedRow: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table
        data={data}
        columns={columns}
        expandedRowRender={row => `eu amo ser ${row.job}`}
      />
    </Flex>
  )
}

export const WithClickAction: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#FFF'>
      <Table
        data={data}
        columns={columns}
        onClickRow={row => console.log('todas as infos da row:', row)}
      />
    </Flex>
  )
}

export const WithContainer: React.FC = () => {
  return (
    <Container title='My Table!'>
      <Flex flex={1} flexDirection='column' m='24px'>
        <Table data={data} columns={columns} />
      </Flex>
    </Container>
  )
}
