import React, { useState } from 'react'

import { Checkbox } from './Checkbox'

export default {
  component: Checkbox,
  title: 'atoms/Checkbox'
}

export const basic: React.FC = () => {
  const [checked, setChecked] = useState(false)

  return <Checkbox onChange={() => setChecked(!checked)} checked={checked} />
}

export const checked: React.FC = () => <Checkbox checked={true} />

export const disabled: React.FC = () => <Checkbox disabled={true} />

export const disabledChecked: React.FC = () => (
  <Checkbox checked={true} disabled={true} />
)
