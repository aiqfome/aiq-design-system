import React, { useState } from 'react'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Alert } from './Alert'
import { Button } from '../Button'

import { withKnobs, text, object } from '@storybook/addon-knobs'

export default {
  title: 'Alert',
  component: Alert,
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
      <Alert
        show={open}
        title={text('title', 'Modal')}
        onClose={() => setOpen(false)}
        okButton={object('okButton', okButton)}
        cancelButton={object('cancelButton', cancelButton)}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Alert>
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
      <Alert title='Modal' show={open} onClose={() => setOpen(false)}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Alert>
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
      <Alert
        show={open}
        title='Modal'
        animation={true}
        okButton={okButton}
        cancelButton={cancelButton}
        onClose={() => setOpen(false)}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Alert>
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
      <Alert
        title='Modal 1'
        animation={true}
        show={openModal1}
        okButton={okButton}
        cancelButton={cancelButton}
        onClose={() => setOpenModal1(false)}
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
      </Alert>

      <Alert
        zIndex={2001}
        title='Modal 2'
        animation={true}
        show={openModal2}
        okButton={okButton}
        cancelButton={cancelButton}
        onClose={() => setOpenModal2(false)}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Alert>
    </Flex>
  )
}
