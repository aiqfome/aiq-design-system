import React, { useState } from 'react'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Modal } from './Modal'
import { Button } from '../Button'

import { text, object, select } from '@storybook/addon-knobs'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'title',
  'form',
  'formProps',
  'buttonsProps',
  'variant',
  'show',
  'animation',
  'zIndex',
  'onClose',
  'onSubmit',
  'children',
  'okButton',
  'cancelButton'
]

export default createPageExport(Modal, 'Modal', aiqProps, {
  argTypes: {
    size: {
      control: 'variant',
      options: ['small', 'medium', 'big']
    },
    title: { control: 'text' },
    show: { control: 'boolean' },
    animation: { control: 'boolean' },
    zIndex: { control: 'number' }
  },
  args: {
    title: 'Modal'
  }
})

export const Basic = args => {
  const [open, setOpen] = useState(false)

  const okButton = {
    label: 'ok',
    function: () => {
      console.log('ok')
    },
    visible: true
  }
  const cancelButton = {
    label: 'cancel',
    function: () => {
      console.log('cancel')
    },
    visible: true
  }

  function handleShowModal() {
    setOpen(!open)
  }

  return (
    <Flex>
      <Button palette='primary' onClick={handleShowModal} variant='contained'>
        Show Modal
      </Button>
      <Modal
        show={open}
        onClose={() => setOpen(false)}
        okButton={object('okButton', okButton)}
        cancelButton={object('cancelButton', cancelButton)}
        {...args}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}
Basic.args = {
  variant: 'medium'
}

export const Small = args => {
  const [open, setOpen] = useState(false)

  const okButton = {
    label: 'ok',
    function: () => {
      console.log('ok')
    },
    visible: true
  }
  const cancelButton = {
    label: 'cancel',
    function: () => {
      console.log('cancel')
    },
    visible: true
  }

  function handleShowModal() {
    setOpen(!open)
  }

  return (
    <Flex>
      <Button palette='primary' onClick={handleShowModal} variant='contained'>
        Show Modal
      </Button>
      <Modal
        variant='small'
        show={open}
        onClose={() => setOpen(false)}
        okButton={okButton}
        cancelButton={cancelButton}
        {...args}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}
Basic.args = {
  variant: 'small'
}

export const Medium = args => {
  const [open, setOpen] = useState(false)

  const okButton = {
    label: 'ok',
    function: () => {
      console.log('ok')
    },
    visible: true
  }
  const cancelButton = {
    label: 'cancel',
    function: () => {
      console.log('cancel')
    },
    visible: true
  }

  function handleShowModal() {
    setOpen(!open)
  }

  return (
    <Flex>
      <Button palette='primary' onClick={handleShowModal} variant='contained'>
        Show Modal
      </Button>
      <Modal
        show={open}
        onClose={() => setOpen(false)}
        okButton={okButton}
        cancelButton={cancelButton}
        {...args}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}
Basic.args = {
  variant: 'medium'
}

export const Big = args => {
  const [open, setOpen] = useState(false)

  const okButton = {
    label: 'ok',
    function: () => {
      console.log('ok')
    },
    visible: true
  }
  const cancelButton = {
    label: 'cancel',
    function: () => {
      console.log('cancel')
    },
    visible: true
  }

  function handleShowModal() {
    setOpen(!open)
  }

  return (
    <Flex>
      <Button palette='primary' onClick={handleShowModal} variant='contained'>
        Show Modal
      </Button>
      <Modal
        show={open}
        onClose={() => setOpen(false)}
        okButton={okButton}
        cancelButton={cancelButton}
        {...args}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}
Big.args = {
  variant: 'medium'
}

export const WithOutButtons = args => {
  const [open, setOpen] = useState(false)

  function handleShowModal() {
    setOpen(!open)
  }

  return (
    <Flex>
      <Button palette='primary' onClick={handleShowModal} variant='contained'>
        Show Modal
      </Button>
      <Modal show={open} onClose={() => setOpen(false)} {...args}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}

export const WithAnimation = args => {
  const [open, setOpen] = useState(false)

  const okButton = {
    label: 'ok',
    function: () => {
      console.log('ok')
    },
    visible: true
  }
  const cancelButton = {
    label: 'cancel',
    function: () => {
      console.log('cancel')
    },
    visible: true
  }

  function handleShowModal() {
    setOpen(!open)
  }

  return (
    <Flex>
      <Button palette='primary' onClick={handleShowModal} variant='contained'>
        Show Modal With Animation
      </Button>
      <Modal
        show={open}
        onClose={() => setOpen(false)}
        okButton={okButton}
        cancelButton={cancelButton}
        {...args}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}
WithAnimation.args = {
  animation: true
}

export const WithZIndex = args => {
  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)

  function handleShowModal() {
    setOpenModal1(!openModal1)
  }

  const okButton = {
    label: 'ok',
    function: () => {
      console.log('ok')
    },
    visible: true
  }
  const cancelButton = {
    label: 'cancel',
    function: () => {
      console.log('cancel')
    },
    visible: true
  }

  return (
    <Flex>
      <Button palette='primary' onClick={handleShowModal} variant='contained'>
        Show Modal
      </Button>
      <Modal
        show={openModal1}
        onClose={() => setOpenModal1(false)}
        okButton={okButton}
        cancelButton={cancelButton}
        {...args}
      >
        <Flex variant='centralized' flexDirection='column'>
          <Text marginBottom={16}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
          <Button
            onClick={() => setOpenModal2(true)}
            variant='contained'
            palette='secondary'
          >
            Open Modal 2
          </Button>
        </Flex>
      </Modal>

      <Modal
        title='Modal 2'
        animation={true}
        show={openModal2}
        zIndex={2001}
        onClose={() => setOpenModal2(false)}
        okButton={okButton}
        cancelButton={cancelButton}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}
WithZIndex.args = {
  animation: true
}
