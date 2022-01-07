import React, { ReactElement } from 'react'

import { Tooltip } from './Tooltip'
import { Text } from '../Text'
import { Flex } from '../Flex'

export default {
  component: Tooltip,
  title: 'Tooltip'
}

export const Basic: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip body="I'm hungry">
        <Text cursor='pointer'>Hamburguer</Text>
      </Tooltip>
    </Flex>
  )
}

export const Variants: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip variant='topRight' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Right-Top
        </Text>
      </Tooltip>
      <Tooltip variant='topCenter' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Center-Top
        </Text>
      </Tooltip>
      <Tooltip variant='topLeft' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Left-Top
        </Text>
      </Tooltip>
      <Tooltip variant='bottomRight' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Right-Bottom
        </Text>
      </Tooltip>
      <Tooltip variant='bottomCenter' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Center-Bottom
        </Text>
      </Tooltip>
      <Tooltip variant='bottomLeft' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Left-Bottom
        </Text>
      </Tooltip>
    </Flex>
  )
}

export const Types: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip type='default' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Default
        </Text>
      </Tooltip>
      <Tooltip type='balloon' variant='bottomCenter' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Balloon
        </Text>
      </Tooltip>
    </Flex>
  )
}

export const Body: React.FC = (): ReactElement => {
  const Menu = () => {
    return (
      <Flex flexDirection='column'>
        <Text>1 Item</Text>
        <Text>2 Item</Text>
        <Text>3 Item</Text>
        <Text>4 Item</Text>
      </Flex>
    )
  }

  return (
    <Flex variant='fullCentralized'>
      <Tooltip variant='bottomRight' body={<Menu />}>
        <Text mx={10} cursor='pointer'>
          Body
        </Text>
      </Tooltip>
    </Flex>
  )
}
