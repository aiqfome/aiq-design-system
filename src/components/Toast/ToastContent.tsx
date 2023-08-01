import React, { useEffect, useMemo, useState } from 'react'

import { MdCheck, MdClose, MdError, MdInfo, MdWarning } from 'react-icons/md'
import { animated } from 'react-spring'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Button } from '../Button'

import { Message } from './Toast'
import { useToast } from './ToastProvider'
export interface Props {
  type?: 'info' | 'success' | 'error' | 'warning'
  className?: any
  message: Message
}

interface PropsStyledToast {
  fixed: boolean
  variation: any
  description: string
}

interface PropsProgress {
  init: boolean
  fixed: boolean
  variation: any
  duration?: number
}

const toastVariations = {
  info: {
    background: 'info',
    color: '#fff',
    bar: 'blue',
    icon: <MdInfo size={24} />
  },
  success: {
    background: 'success',
    color: '#fff',
    bar: 'green',
    icon: <MdCheck size={24} />
  },
  error: {
    background: 'error',
    color: '#fff',
    bar: 'red',
    icon: <MdError size={24} />
  },
  warning: {
    background: 'warning',
    color: '#fff',
    bar: 'orange',
    icon: <MdWarning size={24} />
  }
}

const ProgressStyled = styled.div<PropsProgress>`
  width: 0;
  top: 0px;
  left: 0px;
  flex: none;
  height: 6px;
  position: absolute;
  animation-duration: ${({ duration }) => `${duration || 2.6}s`};
  border-radius: 10px 10px 0 0;
  animation-fill-mode: forwards;
  background: ${({ theme }) => theme.colors.primary};
  animation-name: ${({ fixed }) => (!fixed ? 'progressing' : '')};
  background: ${({ variation, theme }) => theme.colors[variation.bar]};

  @keyframes progressing {
    0% {
      width: 0;
      border-radius: 10px 10px 10px 0;
    }

    70% {
      border-radius: 10px 10px 10px 0;
    }

    100% {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
  }
`

const StyledToast = styled(animated.div)<PropsStyledToast>`
  width: 360px;
  display: flex;
  position: relative;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: ${({ fixed }) =>
    !fixed ? '22px 30px 16px 16px' : '16px 30px 16px 16px'};

  & + div {
    margin-top: 8px;
  }

  color: ${({ variation }) => variation.color};
  background: ${({ variation, theme }) => theme.colors[variation.background]};

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${({ description }) =>
    !description &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`

export const ToastContent: React.FC<Props> = ({ message, className }) => {
  const [init, setInit] = useState(false)
  const { removeToast } = useToast()

  const durationMilliseconds = (message.duration || 3) * 1000

  useEffect(() => {
    if (!message.fixed) {
      setInit(true)
      const timer = setTimeout(() => {
        removeToast(message.id)
      }, durationMilliseconds)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [message.fixed, message.id, removeToast])

  const variation = useMemo(
    () => toastVariations[message.type] || {},
    [message.type]
  )

  return (
    <StyledToast
      variation={variation}
      className={className}
      fixed={!!message.fixed}
      data-testid='toast-content'
      description={message.description}
    >
      <ProgressStyled
        init={init}
        variation={variation}
        fixed={!!message.fixed}
        duration={message.duration}
      />

      {variation.icon}

      <Box px={5}>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </Box>

      <Button onClick={() => removeToast(message.id)}>
        <MdClose size={24} color='#fff' />
      </Button>
    </StyledToast>
  )
}
