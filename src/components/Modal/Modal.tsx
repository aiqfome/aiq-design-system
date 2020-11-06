import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled, { DefaultTheme, css } from 'styled-components'
import { layout } from 'styled-system'
import { Flex, Props as FlexProps } from '../Flex'
import { Button } from '../Button'
import { Text } from '../Text'
import { Box } from '../Box'

export interface Props {
  title: string
  variant?: 'big' | 'medium' | 'small' | 'alert'
  show?: boolean
  animation?: boolean
  zIndex?: number
  onClose?: () => void
  children?: any
  okButton?: {
    label: string
    function: () => void
    visible: boolean
  }
  cancelButton?: {
    label: string
    function: () => void
    visible: boolean
  }
}

const modalVariants: { [index: string]: any } = {
  big: css`
    padding: 37px 24px 24px 24px;
    max-width: 1020px;
  `,
  medium: css`
    padding: 37px 24px 24px 24px;
    max-width: 1020px;
  `,
  small: css`
    padding: 37px 24px 24px 24px;
    max-width: 680px;
  `,
  alert: css`
    padding: 30px 24px 22px 30px;
    max-width: 362px;
    align-items: flex-start;
  `
}

interface BackgroundModalProps extends FlexProps {
  animation?: boolean
  zIndex?: number
}

const BackgroundModal = styled(Flex)<BackgroundModalProps>`
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

interface ModalStyledProps extends DefaultTheme, FlexProps {
  variantModal?: string
  animation?: boolean
}

const ModalStyled = styled(Flex)<ModalStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 6px #0000001a;
  border: 1px solid #dedede;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;

  ${({ variantModal }) => modalVariants[variantModal || 'medium']}

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

export const Modal: React.FC<Props> = ({
  title,
  children,
  zIndex = 2000,
  show = false,
  animation = false,
  onClose = () => {
    // do nothing.
  },
  okButton = defaultButton,
  variant = 'medium',
  cancelButton = defaultButton,
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (show) setIsMounted(show)
  }, [show])

  function handleOk() {
    okButton.function()
  }

  function handleCancel() {
    cancelButton.function()
    onClose()
  }

  function handleClickOutSide({ target }) {
    if (target.className && target.className.includes('background-modal')) {
      onClose()
    }
  }

  if (isMounted) {
    return createPortal(
      <BackgroundModal
        className={`background-modal ${show ? 'show' : 'hide'}`}
        variant='fullCentralized'
        animation={animation}
        zIndex={zIndex}
        onClick={handleClickOutSide}
      >
        <ModalStyled
          variantModal={variant}
          animation={animation}
          className={`${show ? 'show' : 'hide'}`}
          {...props}
        >
          <Text
            color='primary'
            fontSize='xlarge'
            fontWeight='semiBold'
            marginBottom={variant !== 'alert' ? '30px' : '15px'}
          >
            {title}
          </Text>

          {children}

          {variant !== 'alert' ? (
            <Flex justifyContent='space-between' marginTop={44} width='100%'>
              {cancelButton.visible && (
                <Button
                  fontWeight='medium'
                  onClick={handleCancel}
                  palette='primary'
                  variant='outlined'
                  {...cancelButton}
                >
                  {cancelButton.label}
                </Button>
              )}
              {okButton.visible && (
                <Button
                  onClick={handleOk}
                  fontWeight='medium'
                  palette='primary'
                  variant='contained'
                  {...okButton}
                >
                  {okButton.label}
                </Button>
              )}
            </Flex>
          ) : (
            <Flex justifyContent='flex-end' marginTop={26} width='100%'>
              {cancelButton.visible && (
                <Button
                  onClick={handleCancel}
                  marginRight={48}
                  palette='primary'
                  {...cancelButton}
                >
                  {cancelButton.label}
                </Button>
              )}
              {okButton.visible && (
                <Button onClick={handleOk} palette='primary' {...okButton}>
                  {okButton.label}
                </Button>
              )}
            </Flex>
          )}
        </ModalStyled>
      </BackgroundModal>,
      document.querySelector('#modal-root')
    )
  }

  return <Box display='none'></Box>
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['big', 'medium', 'small', 'alert']),
  children: PropTypes.node,
  animation: PropTypes.bool,
  zIndex: PropTypes.number,
  okButton: PropTypes.any,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cancelButton: PropTypes.any
}
