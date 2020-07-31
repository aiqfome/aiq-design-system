import React from 'react'
import PropTypes from 'prop-types'
import styled, { DefaultTheme, css } from 'styled-components'

import { Flex } from '../../atoms/Flex'
import { Button } from '../../atoms/Button'
import { Text } from '../../atoms/Text'

export interface Props {
  title: string
  variant?: 'big' | 'medium' | 'small'
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
  big: css``,
  medium: css`
    padding: 37px 24px 24px 24px;
    max-width: 522px;
  `,
  alert: css``
}

interface ModalStyledProps extends DefaultTheme {
  variant?: string
}

const ModalStyled = styled.div<ModalStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 6px #0000001a;
  border: 1px solid #dedede;
  border-radius: 12px;
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
  okButton = defaultButton,
  variant = 'medium',
  cancelButton = defaultButton
}) => {
  return (
    <ModalStyled variant={variant}>
      <Text
        color='primary'
        fontSize='xlarge'
        fontWeight='semiBold'
        marginBottom={44}
      >
        {title}
      </Text>
      <Flex flex={1} maxWidth={435}>
        {children}
      </Flex>
      <Flex justifyContent='space-between' marginTop={44} width='100%'>
        {cancelButton.visible && (
          <Button palette='primary' variant='contained'>
            {cancelButton.label}
          </Button>
        )}
        {okButton.visible && (
          <Button palette='primary' variant='outlined'>
            {okButton.label}
          </Button>
        )}
      </Flex>
    </ModalStyled>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['big', 'medium', 'small']),
  children: PropTypes.node,
  okButton: PropTypes.any,
  cancelButton: PropTypes.any
}
