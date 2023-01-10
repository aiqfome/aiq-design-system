import React, { ReactElement } from 'react'

import { Tooltip } from './Tooltip'
import { Text } from '../Text'
import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['children', 'body', 'variant', 'type']

export default createPageExport(Tooltip, 'Tooltip', aiqProps, {
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'topLeft',
        'topRight',
        'topCenter',
        'bottomLeft',
        'bottomRight',
        'bottomCenter'
      ]
    },
    type: {
      control: 'select',
      options: ['default', 'balloon']
    }
  }
})

export const Basic = (args): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip {...args}>
        <Text cursor='pointer'>Hamburguer</Text>
      </Tooltip>
    </Flex>
  )
}
Basic.args = {
  body: "I'm hungry"
}

export const Variants = (args): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip {...args}>
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
Basic.args = {
  body: "I'm hungry",
  variant: 'topRight'
}

export const Types = (args): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Tooltip {...args}>
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
Basic.args = {
  body: "I'm hungry",
  type: 'default'
}

export const Body = (args): ReactElement => {
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
