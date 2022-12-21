import React, { useContext, useCallback, createContext, useState } from 'react'

import { Toast, Message } from './Toast'
import Lodash from 'lodash'

const ToastContext = createContext({
  addToast: (message: any): any => {
    throw new Error(`useToast must be used within a ToastProvider: ${message}`)
  },
  removeToast: (id: string): any => {
    throw new Error(`useToast must be used within a ToastProvider: ${id}`)
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
    const id = Lodash.uniqueId()

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

export const useToast = (): ContextProps => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
