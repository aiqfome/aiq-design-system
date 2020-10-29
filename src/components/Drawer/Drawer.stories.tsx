import React, { useState } from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Text } from '../Text'
import { Drawer } from './Drawer'
import { Button } from '../Button'

export default {
  component: Drawer,
  title: 'Drawer',
  decorators: [withKnobs]
}

export const basic: React.FC = () => (
  <Drawer
    opened={boolean('opened', true)}
    variation={select('variation', { Right: 'right', Left: 'left' }, 'right')}
  >
    <Text>{text('text', 'Design System')}</Text>
  </Drawer>
)

export const WithMask: React.FC = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Button onClick={() => setOpened(true)}>clique aqui para abrir</Button>
      <Drawer opened={opened} onClose={() => setOpened(false)}>
        <Text>Design System</Text>
      </Drawer>
    </>
  )
}

export const WithLoading: React.FC = () => {
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
