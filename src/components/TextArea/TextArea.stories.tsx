import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { TextArea } from './TextArea'

export default {
  component: TextArea,
  title: 'TextArea',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => (
  <Flex variant='fullCentralized'>
    <TextArea
      value={text('value', '')}
      placeholder={text('placeholder', 'duas pizzas é muito')}
    />
  </Flex>
)
