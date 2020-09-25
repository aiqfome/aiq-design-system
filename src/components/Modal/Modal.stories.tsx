import React, { useState } from 'react'

import { Modal } from './Modal'
import { Text } from '../Text'
import { Button } from '../Button'
import { Flex } from '../Flex'
import { withKnobs, text, object, select } from '@storybook/addon-knobs'

export default {
  component: Modal,
  title: 'Modal',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => {
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
        title={text('title', 'Modal')}
        show={open}
        variant={select(
          'Variant',
          { Small: 'small', Medium: 'medium', Big: 'big', Alert: 'alert' },
          'medium'
        )}
        onClose={() => setOpen(false)}
        okButton={object('okButton', okButton)}
        cancelButton={object('cancelButton', cancelButton)}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}

export const Small: React.FC = () => {
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
        title='Modal'
        variant='small'
        show={open}
        onClose={() => setOpen(false)}
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

export const Medium: React.FC = () => {
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
        title='Modal'
        show={open}
        variant='medium'
        onClose={() => setOpen(false)}
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

export const Big: React.FC = () => {
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
        title='Modal'
        variant='big'
        show={open}
        onClose={() => setOpen(false)}
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

export const WithOutButtons: React.FC = () => {
  const [open, setOpen] = useState(false)

  function handleShowModal() {
    setOpen(!open)
  }

  return (
    <Flex>
      <Button palette='primary' onClick={handleShowModal} variant='contained'>
        Show Modal
      </Button>
      <Modal title='Modal' show={open} onClose={() => setOpen(false)}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}

export const Alert: React.FC = () => {
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
        Show Alert
      </Button>
      <Modal
        title='Alert'
        variant='alert'
        show={open}
        onClose={() => setOpen(false)}
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

export const WithAnimation: React.FC = () => {
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
        title='Modal'
        animation={true}
        show={open}
        onClose={() => setOpen(false)}
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

export const WithZIndex: React.FC = () => {
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
        title='Modal 1'
        animation={true}
        show={openModal1}
        onClose={() => setOpenModal1(false)}
        okButton={okButton}
        cancelButton={cancelButton}
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
