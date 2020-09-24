import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Radio } from './Radio'
import { Flex } from '../Flex'

export default {
  component: Radio,
  title: 'Radio',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => (
  <Flex>
    <Radio
      disabled={boolean('disabled', false)}
      checked={boolean('checked', true)}
      mx={10}
      name='radioBasic'
      value='01'
    />
    <Radio name='radioBasic' value='02' />
  </Flex>
)

export const Disabled: React.FC = () => (
  <Flex>
    <Radio mx={10} disabled={true} name='radioDisabled' value='01' />
  </Flex>
)

export const Checked: React.FC = () => (
  <Flex>
    <Radio mx={10} checked={true} name='radioChecked' value='01' />
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
    />
  </Flex>
)
