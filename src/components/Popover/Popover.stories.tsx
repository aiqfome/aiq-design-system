import React, { ReactElement } from 'react'

import { Popover } from './Popover'
import { Text } from '../Text'
import { Flex } from '../Flex'

export default {
  component: Popover,
  title: 'Popover'
}

export const Basic: React.FC = (): ReactElement => {
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

export const ArrowState: React.FC = (): ReactElement => {
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

export const Triggers: React.FC = (): ReactElement => {
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
