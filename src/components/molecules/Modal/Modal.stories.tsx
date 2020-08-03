import React, { useState } from 'react'

import { Modal } from './Modal'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { Flex } from '../../atoms/Flex'

export default {
  component: Modal,
  title: 'molecules/Modal'
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
        title='Modal'
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
      <Modal title='Modal' show={open} onClose={() => setOpen(false)}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Modal>
    </Flex>
  )
}
