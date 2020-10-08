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
      <Tooltip mx={10} variant='top' body="I'm hungry">
        <Text cursor='pointer'>Top</Text>
      </Tooltip>
      <Tooltip mx={10} variant='bottom' body="I'm hungry">
        <Text cursor='pointer'>Bottom</Text>
      </Tooltip>
      <Tooltip mx={10} variant='left' body="I'm hungry">
        <Text cursor='pointer'>Left</Text>
      </Tooltip>
      <Tooltip mx={10} variant='right' body="I'm hungry">
        <Text cursor='pointer'>Right</Text>
      </Tooltip>
      <Tooltip mx={10} variant='right-bottom' body="I'm hungry">
        <Text cursor='pointer'>Right-Bottom</Text>
      </Tooltip>
      <Tooltip mx={10} variant='left-bottom' body="I'm hungry">
        <Text cursor='pointer'>Left-Bottom</Text>
      </Tooltip>
    </Flex>
  )
}

export const TooltipInBottom: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip mx={10} variant='top' body="I'm hungry">
        <Button variant='outlined' palette='primary'>
          Top Top Top Top Top Top
        </Button>
      </Tooltip>
      <Tooltip mx={10} variant='left' body="I'm hungry">
        <Button variant='outlined' palette='primary'>
          Left Left Left Left Left Left
        </Button>
      </Tooltip>
      <Tooltip mx={10} variant='right' body="I'm hungry">
        <Button variant='outlined' palette='primary'>
          Right Right Right Right Right Right
        </Button>
      </Tooltip>
      <Tooltip mx={10} variant='right-bottom' body="I'm hungry">
        <Button variant='outlined' palette='primary'>
          Right- Right- Right- Right- Right- Right-Bottom
        </Button>
      </Tooltip>
      <Tooltip
        mx={10}
        variant='left-bottom'
        body=' Left- Left- Left- Left- Left- Left-Bottom'
      >
        <Button variant='outlined' palette='primary'>
          Left- Left- Left- Left- Left- Left-Bottom
        </Button>
      </Tooltip>
      <Tooltip mx={10} variant='bottom' left={-0} body='Bottom Bottom Bottom'>
        <Button variant='outlined' palette='primary'>
          Bottom Bottom Bottom Bottom Bottom Bottom
        </Button>
      </Tooltip>
    </Flex>
  )
}

export const Types: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip mx={10} type='default' body="I'm hungry">
        <Text cursor='pointer'>Default</Text>
      </Tooltip>
      <Tooltip mx={10} type='balloon' variant='bottom' body="I'm hungry">
        <Text cursor='pointer'>Balloon</Text>
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
      <Tooltip mx={10} variant='right-bottom' body={<Menu />}>
        <Text cursor='pointer'>Body</Text>
      </Tooltip>
    </Flex>
  )
}
