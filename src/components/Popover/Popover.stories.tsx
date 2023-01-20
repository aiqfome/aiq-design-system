import React, { ReactElement } from 'react'

import { Popover } from './Popover'
import { Text } from '../Text'
import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'arrow',
  'keepOpen',
  'isVisible',
  'children',
  'trigger',
  'content',
  'notificationBackgroundColor',
  'notificationTextColor',
  'onVisibleChange',
  'theme',
  'placement'
]

export default createPageExport(Popover, 'Popover', aiqProps, {
  argTypes: {
    arrow: { control: 'boolean' },
    keepOpen: { control: 'boolean' },
    isVisible: { control: 'boolean' },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'contextMenu']
    },
    notificationBackgroundColor: { control: 'text' },
    notificationTextColor: { control: 'text' },
    placement: {
      control: 'select',
      options: [
        'topLeft',
        'topRight',
        'topCenter',
        'bottomLeft',
        'bottomRight',
        'bottomCenter'
      ]
    }
  }
})

export const Basic = (args): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Popover {...args}>
        <Text mx={10} cursor='pointer'>
          bottomCenter
        </Text>
      </Popover>
    </Flex>
  )
}
Basic.args = {
  arrow: true,
  content: 'Im hungry'
}

export const Variants = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Popover arrow content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          bottomCenter
        </Text>
      </Popover>

      <Popover arrow placement='bottomLeft' content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          bottomLeft
        </Text>
      </Popover>

      <Popover arrow placement='bottomRight' content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          bottomRight
        </Text>
      </Popover>

      <Popover arrow placement='topCenter' content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          topCenter
        </Text>
      </Popover>

      <Popover arrow placement='topLeft' content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          topLeft
        </Text>
      </Popover>

      <Popover arrow placement='topRight' content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          topRight
        </Text>
      </Popover>
    </Flex>
  )
}

export const ArrowState = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Popover arrow content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          arrow
        </Text>
      </Popover>

      <Popover content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          sem arrow
        </Text>
      </Popover>
    </Flex>
  )
}

export const Triggers = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Popover content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          passe o mouse
        </Text>
      </Popover>

      <Popover trigger='click' content='Im hungry'>
        <Text mx={10} cursor='pointer'>
          clique
        </Text>
      </Popover>

      <Popover content='Im hungry' trigger='contextMenu'>
        <Text mx={10} cursor='pointer'>
          clique com botão direito
        </Text>
      </Popover>
    </Flex>
  )
}
