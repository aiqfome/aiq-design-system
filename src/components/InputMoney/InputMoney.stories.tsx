import React, { useState } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Flex } from '../Flex'
import { InputMoney } from './InputMoney'

export default {
  component: InputMoney,
  title: 'InputMoney',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => {
  const [input, setInput] = useState(0)

  return (
    <Flex variant='fullCentralized'>
      <InputMoney
        value={input}
        errorForm={boolean('errorForm', false)}
        errorMessage={text('errorMessage', 'message error')}
        label={text('label', 'aiqfome')}
        placeholder={text('placeholder', 'duas pizzas é muito')}
        onChange={(_event, value) => {
          setInput(value)
        }}
      />
    </Flex>
  )
}
