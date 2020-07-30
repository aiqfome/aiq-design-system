import React from 'react'

import { ToastProvider, useToast } from './index'
import { Flex } from '../../atoms/Flex'
import { Button } from '../../atoms/Button'

export default {
  component: ToastProvider,
  title: 'molecules/Toast'
}

export const basic: React.FC = () => {
  const ContentToast: React.FC = () => {
    const { addToast } = useToast()

    function showToast() {
      addToast({
        title: 'Hi ✌️',
        description: 'I am a toast'
      })
    }

    return (
      <Flex variant='fullCentralized'>
        <Button palette='primary' variant='contained' onClick={showToast}>
          Show Toast
        </Button>
      </Flex>
    )
  }

  return (
    <ToastProvider>
      <ContentToast />
    </ToastProvider>
  )
}

export const info: React.FC = () => {
  const ContentToast: React.FC = () => {
    const { addToast } = useToast()

    function showToast() {
      addToast({
        type: 'info',
        title: 'Hi ✌️',
        description: 'I am a info toast'
      })
    }

    return (
      <Flex variant='fullCentralized'>
        <Button palette='primary' variant='contained' onClick={showToast}>
          Show Toast
        </Button>
      </Flex>
    )
  }

  return (
    <ToastProvider>
      <ContentToast />
    </ToastProvider>
  )
}

export const success: React.FC = () => {
  const ContentToast: React.FC = () => {
    const { addToast } = useToast()

    function showToast() {
      addToast({
        type: 'success',
        title: 'Hi ✌️',
        description: 'I am a success toast'
      })
    }

    return (
      <Flex variant='fullCentralized'>
        <Button palette='primary' variant='contained' onClick={showToast}>
          Show Toast
        </Button>
      </Flex>
    )
  }

  return (
    <ToastProvider>
      <ContentToast />
    </ToastProvider>
  )
}

export const error: React.FC = () => {
  const ContentToast: React.FC = () => {
    const { addToast } = useToast()

    function showToast() {
      addToast({
        type: 'error',
        title: 'Hi ✌️',
        description: 'I am a error toast'
      })
    }

    return (
      <Flex variant='fullCentralized'>
        <Button palette='primary' variant='contained' onClick={showToast}>
          Show Toast
        </Button>
      </Flex>
    )
  }

  return (
    <ToastProvider>
      <ContentToast />
    </ToastProvider>
  )
}

export const fixed: React.FC = () => {
  const ContentToast: React.FC = () => {
    const { addToast } = useToast()

    function showToast() {
      addToast({
        title: 'Hi ✌️',
        description: 'I am a fixed toast',
        fixed: true
      })
    }

    return (
      <Flex variant='fullCentralized'>
        <Button palette='primary' variant='contained' onClick={showToast}>
          Show Toast
        </Button>
      </Flex>
    )
  }

  return (
    <ToastProvider>
      <ContentToast />
    </ToastProvider>
  )
}
