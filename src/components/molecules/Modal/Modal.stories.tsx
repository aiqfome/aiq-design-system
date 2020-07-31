import React from 'react'

import { Modal } from './Modal'
import { Text } from '../../atoms/Text'

export default {
  component: Modal,
  title: 'molecules/Modal'
}

export const Basic: React.FC = () => {
  const okButton = {
    label: 'ok',
    function: () => {
      console.log('ok')
    },
    visible: true
  }
  const cancelButton = {
    label: 'cancel',
    function: () => {
      console.log('ok')
    },
    visible: true
  }
  return (
    <Modal title='Modal' okButton={okButton} cancelButton={cancelButton}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>
    </Modal>
  )
}
