import React from 'react'

import { Text } from '../Text'
import { SubMenu } from './SubMenu'

import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'SubMenu',
  component: SubMenu,
  decorators: [withKnobs]
}

export const Basic: React.FC = () => {
  return (
    <SubMenu content='item'>
      <Text color='primary'>submenu</Text>
    </SubMenu>
  )
}
