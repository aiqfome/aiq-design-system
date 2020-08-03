import React from 'react'
import PropTypes from 'prop-types'
import styled, { DefaultTheme, css } from 'styled-components'

import { Flex } from '../../atoms/Flex'
import { Button } from '../../atoms/Button'
import { Text } from '../../atoms/Text'

export interface Props {
  title: string
  variant?: 'big' | 'medium' | 'small' | 'alert'
  show?: boolean
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

interface ModalStyledProps extends DefaultTheme {
  variant?: string
}

const BackgroundModal = styled(Flex)`
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.colors.black}30;
`

const ModalStyled = styled.div<ModalStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 6px #0000001a;
  border: 1px solid #dedede;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;

  ${({ variant }) => modalVariants[variant || 'medium']}
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
  onClose = () => {
    // do nothing.
  },
  okButton = defaultButton,
  variant = 'medium',
  cancelButton = defaultButton
}) => {
  function handleOk() {
    okButton.function()
    onClose()
  }

  function handleCancel() {
    cancelButton.function()
    onClose()
  }

  function handleClickOutSide({ target }) {
    if (target.className.includes('background-modal')) {
      onClose()
    }
  }

  return show ? (
    <BackgroundModal
      className='background-modal'
      variant='fullCentralized'
      onClick={handleClickOutSide}
    >
      <ModalStyled variant={variant}>
        <Text
          color='primary'
          fontSize='xlarge'
          fontWeight='semiBold'
          marginBottom={variant !== 'alert' ? '44px' : '15px'}
        >
          {title}
        </Text>
        <Flex flex={1}>{children}</Flex>

        {variant !== 'alert' ? (
          <Flex justifyContent='space-between' marginTop={44} width='100%'>
            {cancelButton.visible && (
              <Button
                fontWeight='medium'
                onClick={handleCancel}
                palette='primary'
                variant='contained'
              >
                {cancelButton.label}
              </Button>
            )}
            {okButton.visible && (
              <Button
                onClick={handleOk}
                fontWeight='medium'
                palette='primary'
                variant='outlined'
              >
                {okButton.label}
              </Button>
            )}
          </Flex>
        ) : (
          <Flex justifyContent='flex-end' marginTop={26} width='100%'>
            {cancelButton.visible && (
              <Button onClick={handleCancel} marginRight={48} palette='primary'>
                {cancelButton.label}
              </Button>
            )}
            {okButton.visible && (
              <Button onClick={handleOk} palette='primary'>
                {okButton.label}
              </Button>
            )}
          </Flex>
        )}
      </ModalStyled>
    </BackgroundModal>
  ) : (
    <Flex />
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['big', 'medium', 'small', 'alert']),
  children: PropTypes.node,
  okButton: PropTypes.any,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cancelButton: PropTypes.any
}
