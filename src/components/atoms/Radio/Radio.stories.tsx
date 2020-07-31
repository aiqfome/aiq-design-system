import React from 'react'

import { Radio } from './Radio'
import { Flex } from '../Flex'

export default {
  component: Radio,
  title: 'atoms/Radio'
}

export const Basic: React.FC = () => (
  <Flex>
    <Radio mx={10} name='radioBasic' value='01' label='Radio 1' />
    <Radio name='radioBasic' value='02' label='Radio 2' />
  </Flex>
)

export const Disabled: React.FC = () => (
  <Flex>
    <Radio
      mx={10}
      disabled={true}
      name='radioDisabled'
      value='01'
      label='Radio 1'
    />
  </Flex>
)

export const Checked: React.FC = () => (
  <Flex>
    <Radio
      mx={10}
      checked={true}
      name='radioChecked'
      value='01'
      label='Radio 1'
    />
  </Flex>
)

export const CheckedDisabled: React.FC = () => (
  <Flex>
    <Radio
      mx={10}
      disabled={true}
      checked={true}
      name='radioCheckedDisabled'
      value='01'
      label='Radio 1'
    />
  </Flex>
)
