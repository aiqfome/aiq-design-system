import React from 'react'

import { MdSearch } from 'react-icons/md'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Input } from './Input'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'name',
  'inputRef',
  'label',
  'errorForm',
  'type',
  'errorMessage',
  'value',
  'sufix',
  'prefix',
  'variant',
  'containerProps',
  'boxProps',
  'nativeAutoComplete',
  'mask',
  'placheholder'
]

export default createPageExport(Input, 'Input', aiqProps, {
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'default', 'tags']
    },
    errorForm: { control: 'boolean' },
    nativeAutoComplete: { control: 'select', options: ['on', 'disabled'] },
    name: { control: 'text' },
    label: { control: 'text' },
    errorMessage: { control: 'text' },
    value: { control: 'text' }
  },
  args: {
    label: 'Aiqfome'
  }
})

export const Basic = args => (
  <Flex variant='fullCentralized'>
    <Input {...args} />
  </Flex>
)
Basic.args = {
  type: 'text',
  placeholder: 'duas pizzas é muito',
  errorForm: false,
  value: ''
}

export const Outlined = args => (
  <Flex variant='fullCentralized'>
    <Input {...args} />
  </Flex>
)
Outlined.args = {
  variant: 'outlined',
  type: 'text',
  placeholder: 'duas pizzas é muito',
  errorForm: false,
  value: ''
}

export const Disabled = args => (
  <Flex variant='fullCentralized'>
    <Input disabled {...args} />
  </Flex>
)
Disabled.args = {
  variant: 'outlined',
  type: 'text',
  placeholder: 'duas pizzas é muito',
  errorForm: false,
  value: ''
}

export const Password = args => (
  <Flex variant='fullCentralized' columnGap='15px'>
    <Input type='password' {...args} />
    <Input label='Aiqfome' variant='outlined' type='password' />
  </Flex>
)

export const ErrorMessage = args => (
  <Flex variant='fullCentralized'>
    <Input errorForm={true} errorMessage='Not Allowed' {...args} />
  </Flex>
)
ErrorMessage.args = {
  errorForm: true,
  errorMessage: 'Not Allowed'
}

export const WithValue = args => {
  const value = 'hamburger'

  return (
    <Flex variant='fullCentralized'>
      <Input value={value} {...args} />
    </Flex>
  )
}

export const Sufix = args => (
  <Flex variant='fullCentralized'>
    <Input sufix={<MdSearch />} {...args} />
  </Flex>
)

export const Prefix = args => (
  <Flex variant='fullCentralized'>
    <Input prefix={<MdSearch color='#BABCBE' />} {...args} />
  </Flex>
)

export const Tags = args => (
  <Flex flexDirection='column' variant='fullCentralized'>
    <Box maxWidth='600px' width='100%' mb={8}>
      <Input
        placeholder='digite o valor e dê enter para criar tags'
        variant='tags'
        width='100%'
        {...args}
      />
    </Box>
    <Box maxWidth='600px' width='100%' mb={8}>
      <Input
        placeholder='digite o valor e dê enter para criar tags'
        label='Aiqfome'
        variant='tags'
        width='100%'
        value='10,20'
        onChange={e => console.log(e.target.value)}
      />
    </Box>
  </Flex>
)

export const Styled = args => (
  <Flex variant='fullCentralized'>
    <Input
      width='530px'
      border='none'
      placeholder='procure aqui alguma coisa desse painelzão da p*$%#'
      backgroundColor='#F8F8F8'
      prefix={<MdSearch color='#BABCBE' />}
      {...args}
    />
  </Flex>
)

export const Masked = args => (
  <Flex variant='fullCentralized'>
    <Input {...args} />
  </Flex>
)
Masked.args = {
  type: 'text',
  placeholder: 'aiqfome',
  errorForm: false,
  value: '',
  mask: '999,99'
}
