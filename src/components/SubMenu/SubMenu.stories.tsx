import React from 'react'

import { Text } from '../Text'
import { SubMenu } from './SubMenu'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['content', 'children', 'menuProps', 'popoverProps']

export default createPageExport(SubMenu, 'SubMenu', aiqProps, {
  argTypes: {
    data: { control: 'object' },
    opened: { control: 'boolean' }
  }
})

export const Basic = args => {
  return (
    <SubMenu {...args}>
      <Text color='primary'>submenu</Text>
    </SubMenu>
  )
}
Basic.args = {
  content: 'item'
}
