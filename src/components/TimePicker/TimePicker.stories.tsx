import React, { ReactElement } from 'react'

import { TimePicker } from './TimePicker'

import { Flex } from '../Flex'

export default {
  component: TimePicker,
  title: 'TimePicker'
}

export const Basic: React.FC = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <TimePicker placeholder='timepicker' maxWidth='120px' />
  </Flex>
)
