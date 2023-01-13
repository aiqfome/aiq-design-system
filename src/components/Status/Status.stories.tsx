import React, { ReactElement } from 'react'

import { Flex } from '../Flex'
import { Status } from './Status'

import { createPageExport } from '../../utils/storybook'

export default createPageExport(Status, 'Status', ['children', 'statusColor'], {
  argTypes: {
    statusColor: { control: 'text' }
  }
})

export const Basic = (args): ReactElement => (
  <Flex flexDirection='column' variant='fullCentralized'>
    <Status {...args}>status default</Status>
    <Status statusColor='primary'>primary</Status>
    <Status statusColor='success'>success</Status>
    <Status statusColor='info'>information</Status>
    <Status statusColor='warning'>warning</Status>
    <Status statusColor='error'>error</Status>
  </Flex>
)
