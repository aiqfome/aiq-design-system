import React, { useState } from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { Checkbox } from './Checkbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onClick={() => setChecked(!checked)}
        checked={boolean('checked', false)}
        disabled={boolean('disabled', false)}
        label={text('text', 'Aiqfome')}
      />
    </Flex>
  )
}

export const Checked: React.FC = () => {
  const [checked, setChecked] = useState(true)

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onClick={() => setChecked(!checked)}
        checked={checked}
        label={text('text', 'Aiqfome')}
      />
    </Flex>
  )
}

export const Disabled: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onClick={() => setChecked(!checked)}
        disabled={true}
        checked={checked}
        label={text('text', 'Aiqfome')}
      />
    </Flex>
  )
}

export const DisabledChecked: React.FC = () => {
  const [checked, setChecked] = useState(true)

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onClick={() => setChecked(!checked)}
        disabled={true}
        checked={checked}
        label={text('text', 'Aiqfome')}
      />
    </Flex>
  )
}
