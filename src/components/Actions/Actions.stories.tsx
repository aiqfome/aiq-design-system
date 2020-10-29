import React, { ReactElement } from 'react'

import { MdSettings, MdSubdirectoryArrowRight, MdCall } from 'react-icons/md'
import { Avatar } from '../Avatar'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Actions } from './Actions'

export default {
  component: Actions,
  title: 'Actions'
}

const items = [
  {
    description: 'menu 1',
    action: () => console.log('menu 1'),
    icon: <MdSubdirectoryArrowRight size={15} />
  },
  {
    description: 'menu 2',
    icon: <MdCall size={15} />,
    action: () => console.log('menu 2')
  }
]

export const Basic: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Actions items={items}>
        <Icon
          color='primary'
          fontSize='xlarge'
          onClick={e => e.stopPropagation()}
        >
          <MdSettings />
        </Icon>
      </Actions>
    </Flex>
  )
}

export const WithTitle: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Actions title='MENU:' items={items}>
        <Icon
          color='primary'
          fontSize='xlarge'
          onClick={e => e.stopPropagation()}
        >
          <MdSettings />
        </Icon>
      </Actions>
    </Flex>
  )
}

export const WithHeader: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <Actions
        title='MENU:'
        items={items}
        header={
          <Flex alignItems='center'>
            <Avatar palette='primary' alt='Avatar' variant='rounded' mr='5px' />
            eu sou um header
          </Flex>
        }
      >
        <Icon
          color='primary'
          fontSize='xlarge'
          onClick={e => e.stopPropagation()}
        >
          <MdSettings />
        </Icon>
      </Actions>
    </Flex>
  )
}
