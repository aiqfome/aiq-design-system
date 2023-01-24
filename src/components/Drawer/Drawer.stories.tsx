import React, { useState } from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Text } from '../Text'
import { Drawer } from './Drawer'
import { Button } from '../Button'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['opened', 'loading', 'children', 'variation', 'onClose']

export default createPageExport(Drawer, 'Drawer', aiqProps, {
  argTypes: {
    opened: { control: 'boolean' },
    loading: { control: 'boolean' },
    variation: { control: 'select', option: ['right', 'left'] }
  }
})

export const Basic = args => (
  <Drawer {...args}>
    <Text>{text('text', 'Design System')}</Text>
  </Drawer>
)
Basic.args = {
  opened: true
}

export const WithMask: React.FC = args => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Button onClick={() => setOpened(true)}>clique aqui para abrir</Button>
      <Drawer opened={opened} onClose={() => setOpened(false)} {...args}>
        <Text>Design System</Text>
      </Drawer>
    </>
  )
}

export const WithLoading: React.FC = args => {
  const [opened, setOpened] = useState(false)
  const [loading, setLoading] = useState(true)

  const openDrawer = () => {
    setOpened(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const closeDrawer = () => {
    setOpened(false)
    setLoading(true)
  }

  return (
    <>
      <Button onClick={openDrawer}>clique aqui para abrir</Button>
      <Drawer
        width='50%'
        opened={opened}
        loading={loading}
        onClose={closeDrawer}
        {...args}
      >
        <Text>Design System</Text>
      </Drawer>
    </>
  )
}

export const left: React.FC = () => (
  <Drawer opened={true} variation='left'>
    <Text>Design System</Text>
  </Drawer>
)

export const right: React.FC = () => (
  <Drawer opened={true} variation='right'>
    <Text>Design System</Text>
  </Drawer>
)
