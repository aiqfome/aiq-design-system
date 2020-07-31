import React from 'react'

import { Radio } from './Radio'
import { Flex } from '../Flex'

export default {
  component: Radio,
  title: 'atoms/Radio'
}

export const Basic: React.FC = () => (
  <Flex>
    <Radio mx={10} name='radio' value='01' label='Radio 1' />
    <Radio name='radio' value='02' label='Radio 2' />
  </Flex>
)
