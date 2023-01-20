import React from 'react'
import { Label } from './Label'

import { createPageExport } from '../../utils/storybook'

export default createPageExport(Label, 'Label', [])

export const Basic = args => (
  <Label
    color='primary'
    fontSize='medium'
    width='100%'
    fontWeight='semiBold'
    textAlign='center'
    {...args}
  >
    o design system do app mais fominha da internê!
  </Label>
)
