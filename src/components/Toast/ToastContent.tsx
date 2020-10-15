import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { animated } from 'react-spring'

import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'

import styled, { css } from 'styled-components'

import { Box } from '../Box'

import { useToast } from './ToastProvider'
import { Message } from './Toast'
export interface Props {
  type?: 'info' | 'success' | 'error'
  className?: any
  message: Message
}

interface PropsStyledToast {
  description: string
  type: string
}

const toastVariations = {
  info: css`
    background: #ffffff;
    color: #262626;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />
}

const StyledToast = styled(animated.div)<PropsStyledToast>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => toastVariations[props.type || 'info']}

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
    opacity: 0.6;
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
  const { removeToast } = useToast()

  useEffect(() => {
    if (!message.fixed) {
      const timer = setTimeout(() => {
        removeToast(message.id)
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [message.fixed, message.id, removeToast])

  return (
    <StyledToast
      type={message.type}
      description={message.description}
      className={className}
    >
      {icons[message.type || 'info']}

      <Box px={5}>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </Box>

      <button type='button' onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </StyledToast>
  )
}

ToastContent.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error']),
  message: PropTypes.any,
  className: PropTypes.string
}
