import React, { useState, useEffect } from 'react'

import { layout } from 'styled-system'
import { createPortal } from 'react-dom'
import styled, { DefaultTheme, css } from 'styled-components'

import { Box } from '../Box'
import { Text } from '../Text'
import { Button } from '../Button'
import { Flex, Props as FlexProps } from '../Flex'

export interface Props {
  title: string
  show?: boolean
  animation?: boolean
  zIndex?: number
  onClose?: () => void
  children?: any
  okButton?: {
    label: string
    function?: () => void
    visible: boolean
  }
  cancelButton?: {
    label: string
    function: () => void
    visible: boolean
  }
}

interface BackgroundAlertProps extends FlexProps {
  animation?: boolean
  zIndex?: number
}

const BackgroundAlert = styled(Flex)<BackgroundAlertProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.black}30;

  &.hide {
    z-index: -1;
    opacity: 0;
  }

  &.show {
    opacity: 1;
    z-index: ${({ zIndex }) => zIndex};
  }

  ${({ animation }) =>
    animation &&
    css`
      &.hide {
        animation: hide 0.25s;
      }
      @keyframes hide {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      &.show {
        animation: show 0.2s;
      }
      @keyframes show {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}
`

interface AlertStyledProps extends DefaultTheme, FlexProps {
  animation?: boolean
}

const ModalStyled = styled(Flex)<AlertStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 6px #0000001a;
  border: 1px solid #dedede;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 30px 24px 22px 30px;
  max-width: 362px;
  align-items: flex-start;

  ${layout}

  &.hide {
    z-index: -1;
    opacity: 0;
  }

  &.show {
    opacity: 1;
    z-index: 2000;
  }

  ${({ animation }) =>
    animation &&
    css`
      &.hide {
        animation: move-out 0.25s;
      }
      @keyframes move-out {
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(-60px);
        }
      }
      &.show {
        animation: move-in 0.2s;
      }
      @keyframes move-in {
        from {
          opacity: 0;
          transform: translateY(-60px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
`

const defaultButton = {
  label: '',
  function: () => {
    // do nothing.
  },
  visible: false
}

export const Alert: React.FC<Props> = ({
  title,
  children,
  zIndex = 2000,
  show = false,
  animation = false,
  onClose = () => {
    // do nothing.
  },
  okButton = defaultButton,
  cancelButton = defaultButton,
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (show) setIsMounted(show)
  }, [show])

  function handleOk(e) {
    if (e.preventDefault) {
      e.preventDefault()
    }

    if (okButton.function) okButton.function()
  }

  function handleCancel() {
    cancelButton.function()
  }

  function handleClickOutSide({ target }) {
    if (
      typeof target?.className === 'string' &&
      target.className.includes('background-modal')
    ) {
      onClose()
    }
  }

  if (isMounted) {
    return createPortal(
      <BackgroundAlert
        data-testid='overflow-modal-alert'
        zIndex={zIndex}
        animation={animation}
        variant='fullCentralized'
        onClick={handleClickOutSide}
        className={`background-modal ${show ? 'show' : 'hide'}`}
      >
        <ModalStyled
          data-testid='modal-alert'
          animation={animation}
          className={`${show ? 'show' : 'hide'}`}
          {...props}
        >
          <Text
            color='primary'
            fontSize='xlarge'
            marginBottom='30px'
            fontWeight='semiBold'
          >
            {title}
          </Text>

          {children}

          <Flex justifyContent='flex-end' marginTop={26} width='100%'>
            {cancelButton.visible && (
              <Button
                data-testid='modal-alert-btn-cancel'
                onClick={handleCancel}
                marginRight={48}
                palette='primary'
              >
                {cancelButton.label}
              </Button>
            )}

            {okButton.visible && okButton.function && (
              <Button
                data-testid='modal-alert-btn-ok'
                onClick={handleOk}
                palette='primary'
              >
                {okButton.label}
              </Button>
            )}
          </Flex>
        </ModalStyled>
      </BackgroundAlert>,
      document.querySelector('#modal-root')
    )
  }

  return <Box display='none'></Box>
}
