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
  form?: any
  formProps?: any
  buttonsProps?: any
  variant?: 'big' | 'medium' | 'small'
  show?: boolean
  animation?: boolean
  zIndex?: number
  onClose?: () => void
  onSubmit?: () => void
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
  overflow: auto;
  align-items: baseline;
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

const FormStyled = styled.form<ModalStyledProps>`
  display: flex;
  margin: auto;
  flex: 1;
`

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
  margin: 20px auto;

  ${({ variantModal }) => modalVariants[variantModal || 'medium']}

  ${layout}

  &.hide {
    z-index: -1;
    opacity: 0;
  }

  &.show {
    opacity: 1;
    z-index: 2010;
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
  show = false,
  zIndex = 2000,
  animation = false,
  formProps,
  buttonsProps,
  onClose = () => {
    // do nothing.
  },
  form,
  onSubmit = () => {
    // do nothing.
  },
  variant = 'medium',
  okButton = defaultButton,
  cancelButton = defaultButton,
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [bodyOverflow, setBodyOverflow] = useState(false)

  useEffect(() => {
    if (show) setIsMounted(show)
  }, [show])

  useEffect(() => {
    if (show) {
      if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden'
        setBodyOverflow(true)
      }
    } else {
      if (bodyOverflow) document.body.style.overflow = 'auto'
    }

    return () => {
      if (bodyOverflow) {
        document.body.style.overflow = 'auto'
      }
    }
  }, [show, bodyOverflow])

  function handleOk(e) {
    if (e.preventDefault) {
      e.preventDefault()
    }
    okButton.function()
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
      <BackgroundModal
        zIndex={zIndex}
        animation={animation}
        variant='fullCentralized'
        onClick={handleClickOutSide}
        data-testid='modal-container'
        className={`background-modal ${show ? 'show' : 'hide'}`}
      >
        <FormStyled
          {...formProps}
          className='background-modal'
          onSubmit={form ? form.handleSubmit(onSubmit) : undefined}
        >
          <ModalStyled
            animation={animation}
            variantModal={variant}
            className={show ? 'show' : 'hide'}
            {...props}
          >
            <Text
              color='primary'
              fontSize='xlarge'
              marginBottom='15px'
              fontWeight='semiBold'
              data-testid='modal-title'
              textAlign='center'
            >
              {title}
            </Text>

            {children}

            <Flex
              width='100%'
              marginTop={44}
              justifyContent='space-between'
              flexDirection='row-reverse'
              {...buttonsProps}
            >
              {okButton.visible && okButton.function ? (
                <Button
                  palette='primary'
                  onClick={handleOk}
                  variant='contained'
                  fontWeight='medium'
                  data-testid='modal-button'
                  type='button'
                  {...okButton}
                >
                  {okButton.label}
                </Button>
              ) : (
                <Button
                  palette='primary'
                  variant='contained'
                  fontWeight='medium'
                  data-testid='modal-button'
                  type='submit'
                  {...okButton}
                >
                  {okButton.label}
                </Button>
              )}

              {cancelButton.visible && (
                <Button
                  palette='primary'
                  variant='outlined'
                  fontWeight='medium'
                  onClick={handleCancel}
                  data-testid='modal-button'
                  {...cancelButton}
                >
                  {cancelButton.label}
                </Button>
              )}
            </Flex>
          </ModalStyled>
        </FormStyled>
      </BackgroundModal>,
      document.querySelector('#modal-root')
    )
  }

  return <Box display='none'></Box>
}

Modal.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['big', 'medium', 'small']),
  children: PropTypes.node,
  animation: PropTypes.bool,
  zIndex: PropTypes.number,
  okButton: PropTypes.any,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cancelButton: PropTypes.any,
  formProps: PropTypes.object,
  buttonsProps: PropTypes.object
}
