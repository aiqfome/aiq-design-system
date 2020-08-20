import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { MdSearch } from 'react-icons/md'

import { Flex } from '../Flex'
import { Input } from './Input'

export default {
  component: Input,
  title: 'atoms/Input',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Input
      value={text('value', '')}
      errorForm={boolean('errorForm', false)}
      errorMessage={text('errorMessage', 'message error')}
      label={text('label', 'aiqfome')}
      placeholder={text('placeholder', 'duas pizzas é muito')}
      type={select(
        'Type',
        {
          Text: 'text',
          Password: 'password'
        },
        'text'
      )}
    />
  </Flex>
)

export const Outlined: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Input
      variant='outlined'
      value={text('value', '')}
      errorForm={boolean('errorForm', false)}
      errorMessage={text('errorMessage', 'message error')}
      label={text('label', 'aiqfome')}
      type={select(
        'Type',
        {
          Text: 'text',
          Password: 'password'
        },
        'text'
      )}
    />
  </Flex>
)

export const Password: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Input label='Aiqfome' type='password' />
  </Flex>
)

export const ErrorMessage: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Input label='Aiqfome' errorForm={true} errorMessage='Not Allowed' />
  </Flex>
)

export const WithValue: React.FC = () => {
  const value = 'hamburger'

  return (
    <Flex variant='fullCentralized'>
      <Input label='Aiqfome' value={value} />
    </Flex>
  )
}

export const Sufix: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Input label='Aiqfome' sufix={<MdSearch />} />
  </Flex>
)

export const Prefix: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Input label='Aiqfome' prefix={<MdSearch color='#BABCBE' />} />
  </Flex>
)

export const Styled: React.FC = () => (
  <Flex variant='fullCentralized'>
    <Input
      width='530px'
      border='none'
      placeholder='procure aqui alguma coisa desse painelzão da p*$%#'
      backgroundColor='#F8F8F8'
      label='Aiqfome'
      prefix={<MdSearch color='#BABCBE' />}
    />
  </Flex>
)
