import React, { useState } from 'react'

import { Checkbox } from './Checkbox'

export default {
  component: Checkbox,
  title: 'atoms/Checkbox'
}

export const Basic: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return <Checkbox onClick={() => setChecked(!checked)} checked={checked} />
}

export const Checked: React.FC = () => {
  const [checked, setChecked] = useState(true)

  return <Checkbox onClick={() => setChecked(!checked)} checked={checked} />
}

export const Disabled: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      onClick={() => setChecked(!checked)}
      disabled={true}
      checked={checked}
    />
  )
}

export const DisabledChecked: React.FC = () => {
  const [checked, setChecked] = useState(true)

  return (
    <Checkbox
      onClick={() => setChecked(!checked)}
      disabled={true}
      checked={checked}
    />
  )
}
