import React, { useContext, useCallback, createContext, useState } from 'react'
import PropTypes from 'prop-types'

import { v4 as uuidv4 } from 'uuid'

import { Toast, Message } from './Toast'

const ToastContext = createContext({
  addToast: (message: any): any => {
    throw new Error('useToast must be used within a ToastProvider')
  },
  removeToast: (id: string): any => {
    throw new Error('useToast must be used within a ToastProvider')
  }
})

export interface Props {
  children?: any
}

interface ContextProps {
  addToast: any
  removeToast: any
}

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const [messages, setMessages] = useState<Message | any>([])

  const addToast = useCallback(({ type, title, description, fixed }) => {
    const id = uuidv4()

    const toast = {
      id,
      type,
      title,
      description,
      fixed
    }

    setMessages(messages => [...messages, toast])
  }, [])
  const removeToast = useCallback(id => {
    setMessages(messages => messages.filter(message => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

ToastProvider.propTypes = {
  children: PropTypes.node
}
