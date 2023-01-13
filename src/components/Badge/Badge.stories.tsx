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

export const Basic = (args): ReactElement => (
  <>
    <Badge count={10} {...args} />
    <Badge count={1000} backgroundColor='primary' {...args} />
    <Badge>olá</Badge>
    <Badge count={1000}>olá</Badge>
  </>
)
Basic.args = {
  variant: 'default'
}

export const BasicWithOverflow = (args): ReactElement => (
  <Badge count={1000} overflowCount={99} {...args} />
)
BasicWithOverflow.args = {
  variant: 'default'
}

export const Label = (args): ReactElement => (
  <Flex flex={1} flexDirection='column'>
    <Badge variant='label' {...args}>
      burguerzin
    </Badge>
    <Badge variant='label' backgroundColor='primary'>
      pizza
    </Badge>
    <Badge variant='label' backgroundColor='info'>
      coquinha gelada
    </Badge>
  </Flex>
)
Label.args = {
  variant: 'label'
}
