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

  function handleOnChangeChange(event) {
    setChecked(event.target.checked)
  }

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onChange={handleOnChangeChange}
        checked={checked}
        disabled={boolean('disabled', false)}
        label={text('text', 'Aiqfome')}
        labelColor='primary'
      />
    </Flex>
  )
}

export const Checked: React.FC = () => {
  const [checked, setChecked] = useState(true)

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onChange={event => setChecked(event.target.checked)}
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
        onChange={event => setChecked(event.target.checked)}
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
        onChange={event => setChecked(event.target.checked)}
        disabled={true}
        checked={checked}
        label={text('text', 'Aiqfome')}
      />
    </Flex>
  )
}
