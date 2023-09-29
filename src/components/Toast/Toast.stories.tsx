import React from 'react'

import { select, text } from '@storybook/addon-knobs'
import { ToastProvider, useToast } from './index'

import { Button } from '../Button'
import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['children']

export default createPageExport(ToastProvider, 'Toast', aiqProps)

export const basic: React.FC = () => {
  const ContentToast: React.FC = () => {
    const { addToast } = useToast()

    function showToast() {
      addToast({
        title: text('title', 'Hi ✌️'),
        description: text('description', 'I am a toast'),
        type: select(
          'type',
          { Info: 'info', Success: 'success', Error: 'error' },
          'text'
        )
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
        description: 'I am an info toast'
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
        description: 'I am an error toast'
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

export const warning: React.FC = () => {
  const ContentToast: React.FC = () => {
    const { addToast } = useToast()

    function showToast() {
      addToast({
        type: 'warning',
        title: 'Hi ✌️',
        description: 'I am a warning toast'
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

export const successWithDuration: React.FC = () => {
  const ContentToast: React.FC = () => {
    const { addToast } = useToast()

    function showToast() {
      addToast({
        duration: 8,
        title: text('title', 'Hi ✌️'),
        description: text('description', 'I am a toast of 8 seconds'),
        type: 'success'
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
