import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { InputNumber } from './InputNumber'

export default {
  component: InputNumber,
  title: 'InputNumber',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => (
  <Flex variant='fullCentralized'>
    <InputNumber
      errorForm={boolean('errorForm', false)}
      errorMessage={text('errorMessage', 'message error')}
      label={text('label', 'aiqfome')}
      placeholder={text('placeholder', 'duas pizzas é muito')}
    />
  </Flex>
)
