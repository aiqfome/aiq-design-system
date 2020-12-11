import React, { ReactElement } from 'react'

import { Tooltip } from './Tooltip'
import { Text } from '../Text'
import { Flex } from '../Flex'
import { Button } from '../Button'

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
      <Tooltip variant='top' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Top
        </Text>
      </Tooltip>
      <Tooltip variant='bottom' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Bottom
        </Text>
      </Tooltip>
      <Tooltip variant='left' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Left
        </Text>
      </Tooltip>
      <Tooltip variant='right' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Right
        </Text>
      </Tooltip>
      <Tooltip variant='bottomRight' body="I'm hungry">
        <Text mx={10} cursor='pointer'>
          Right-Bottom
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

export const TooltipInBottom: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip variant='top' body="I'm hungry">
        <Button mx={10} variant='outlined' palette='primary'>
          Top Top Top Top Top Top
        </Button>
      </Tooltip>
      <Tooltip variant='left' body="I'm hungry">
        <Button mx={10} variant='outlined' palette='primary'>
          Left Left Left Left Left Left
        </Button>
      </Tooltip>
      <Tooltip variant='right' body="I'm hungry">
        <Button mx={10} variant='outlined' palette='primary'>
          Right Right Right Right Right Right
        </Button>
      </Tooltip>
      <Tooltip variant='bottomRight' body="I'm hungry">
        <Button mx={10} variant='outlined' palette='primary'>
          Right- Right- Right- Right- Right- Right-Bottom
        </Button>
      </Tooltip>
      <Tooltip
        variant='bottomLeft'
        body=' Left- Left- Left- Left- Left- Left-Bottom'
      >
        <Button mx={10} variant='outlined' palette='primary'>
          Left- Left- Left- Left- Left- Left-Bottom
        </Button>
      </Tooltip>
      <Tooltip
        variant='bottom'
        body='Bottom Bottom Bottom Bottom Bottom Bottom'
      >
        <Button mx={10} variant='outlined' palette='primary'>
          Bottom Bottom Bottom Bottom Bottom Bottom
        </Button>
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
      <Tooltip type='balloon' variant='bottom' body="I'm hungry">
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
