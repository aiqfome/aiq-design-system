import React, { useState } from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { Checkbox } from './Checkbox'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['label', 'labelColor', 'style', 'borderColor', 'disabled']

export default createPageExport(Checkbox, 'Checkbox', aiqProps, {
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Aiqfome'
  }
})

export const Basic: React.FC = args => {
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
        labelColor='primary'
        {...args}
      />
    </Flex>
  )
}

export const Checked: React.FC = args => {
  const [checked, setChecked] = useState(true)

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onChange={event => setChecked(event.target.checked)}
        checked={checked}
        {...args}
      />
    </Flex>
  )
}

export const Disabled: React.FC = args => {
  const [checked, setChecked] = useState(false)

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onChange={event => setChecked(event.target.checked)}
        disabled={true}
        checked={checked}
        {...args}
      />
    </Flex>
  )
}

export const DisabledChecked: React.FC = args => {
  const [checked, setChecked] = useState(true)

  return (
    <Flex variant='fullCentralized'>
      <Checkbox
        onChange={event => setChecked(event.target.checked)}
        disabled={true}
        checked={checked}
        {...args}
      />
    </Flex>
  )
}
