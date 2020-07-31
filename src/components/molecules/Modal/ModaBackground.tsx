import React from 'react'

import { Flex } from '../../atoms/Flex'

export const ModalContent: React.FC = ({ children }) => {
  return <Flex variant='fullCentralized'>{children}</Flex>
}
