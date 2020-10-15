import React, { ReactElement } from 'react'

import { Flex } from '../Flex'
import { Status } from './Status'

export default {
  component: Status,
  title: 'Status'
}

export const Basic: React.FC = (): ReactElement => (
  <Flex flexDirection='column' variant='fullCentralized'>
    <Status>status default</Status>
    <Status statusColor='primary'>primary</Status>
    <Status statusColor='success'>success</Status>
    <Status statusColor='info'>information</Status>
    <Status statusColor='warning'>warning</Status>
    <Status statusColor='error'>error</Status>
  </Flex>
)
