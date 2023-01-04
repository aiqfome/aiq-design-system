import React, { ReactElement } from 'react'

import { Badge } from './Badge'
import { Flex } from '../Flex'
import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'color',
  'count',
  'children',
  'className',
  'statusColor',
  'overflowCount',
  'variant'
]

export default createPageExport(Badge, 'Badge', aiqProps, {
  argTypes: {
    variant: {
      control: 'radio',
      options: ['label', 'default']
    }
  },
  args: {
    variant: 'default'
  }
})

export const Basic: React.FC = (args): ReactElement => (
  <Flex flex={1} flexDirection='row'>
    <Badge count={10} {...args} />
    <Badge count={1000} backgroundColor='primary' {...args} />
    <Badge>olá</Badge>
    <Badge count={1000}>olá</Badge>
  </Flex>
)

export const BasicWithOverflow: React.FC = (args): ReactElement => (
  <Badge count={1000} overflowCount={99} {...args} />
)

export const Label: React.FC = (): ReactElement => (
  <Flex flex={1} flexDirection='column'>
    <Badge variant='label'>burguerzin</Badge>
    <Badge variant='label' backgroundColor='primary'>
      pizza
    </Badge>
    <Badge variant='label' backgroundColor='info'>
      coquinha gelada
    </Badge>
  </Flex>
)
