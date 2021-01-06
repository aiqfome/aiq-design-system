import React from 'react'
import PropTypes from 'prop-types'

import { useTransition } from 'react-spring'

import styled from 'styled-components'

import { ToastContent } from './ToastContent'

export type Message = {
  id: string
  type: string
  title: string
  description: string
  fixed?: boolean
}
export interface Props {
  messages?: Message[]
}

const Container = styled.div<Props>`
  display: ${({ messages }) =>
    messages && messages.length > 0 ? 'block' : 'none'};
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 30px;
  overflow: hidden;
`

export const Toast: React.FC<Props> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  )

  return (
    <Container messages={messages} data-testid='toast-container'>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <ToastContent key={key} message={item} {...props} />
      ))}
    </Container>
  )
}

Toast.propTypes = {
  messages: PropTypes.array
}
