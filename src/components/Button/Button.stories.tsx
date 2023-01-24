import React, { ReactElement } from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { FaHamburger, FaWater } from 'react-icons/fa'

import { Button } from './Button'
import { Flex } from '../Flex'
import { Icon } from '../Icon'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'children',
  'prefix',
  'sufix',
  'refButton',
  'variantType',
  'variant',
  'palette',
  'onClick',
  'fullWidth',
  'disabled',
  'className',
  'type'
]

export default createPageExport(Button, 'Button', aiqProps, {
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined', 'fab', 'icon']
    },
    palette: {
      control: 'select',
      options: ['primary', 'error', 'secondary', 'neutral']
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset', undefined]
    },
    disabled: {
      control: 'boolean'
    },
    fullWidth: {
      control: 'boolean'
    }
  },
  args: {
    palette: 'primary'
  }
})

export const Text: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Button
      variant='text'
      fontWeight={select(
        'Font Weight',
        {
          Regular: 'regular',
          Medium: 'medium',
          SemiBold: 'semiBold',
          Bold: 'bold'
        },
        'regular'
      )}
      {...args}
    >
      {text('Label', 'aiqfome!')}
    </Button>
  </Flex>
)

export const Contained: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Flex
      variant='centralized'
      height='200px'
      width='400px'
      border='1px solid lightGrey'
    >
      <Button
        fullWidth={boolean('Full Width', false)}
        variant='contained'
        fontWeight={select(
          'Font Weight',
          {
            Regular: 'regular',
            Medium: 'medium',
            SemiBold: 'semiBold',
            Bold: 'bold'
          },
          'regular'
        )}
        {...args}
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const Disabled: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Flex
      variant='centralized'
      height='200px'
      width='400px'
      border='1px solid lightGrey'
    >
      <Button
        fullWidth={boolean('Full Width', false)}
        variant='contained'
        mx={6}
        disabled={true}
        {...args}
      >
        contained
      </Button>
      <Button
        fullWidth={boolean('Full Width', false)}
        variant='outlined'
        mx={6}
        disabled={true}
        palette={'primary'}
      >
        outlined
      </Button>
      <Button
        fullWidth={boolean('Full Width', false)}
        variant='fab'
        mx={6}
        disabled={true}
        palette={'primary'}
      >
        fab
      </Button>
    </Flex>
  </Flex>
)

export const IconButton: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Flex
      variant='centralized'
      height='200px'
      width='400px'
      border='1px solid lightGrey'
    >
      <Button variant='icon' mx={6} {...args}>
        <Icon color='primary'>
          <FaHamburger size={40} />
        </Icon>
      </Button>
      <Button variant='icon' mx={6} {...args}>
        <Icon>
          <FaHamburger size={30} />
        </Icon>
      </Button>
      <Button variant='icon' mx={6} {...args}>
        <Icon color='primary'>
          <FaHamburger size={20} />
        </Icon>
      </Button>
    </Flex>
  </Flex>
)

export const Outlined: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Flex
      variant='centralized'
      height='200px'
      width='400px'
      border='1px solid lightGrey'
    >
      <Button
        variant='outlined'
        fullWidth={boolean('Full Width', false)}
        fontWeight={select(
          'Font Weight',
          {
            Regular: 'regular',
            Medium: 'medium',
            SemiBold: 'semiBold',
            Bold: 'bold'
          },
          'regular'
        )}
        {...args}
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const Fab: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Flex
      variant='centralized'
      height='200px'
      width='400px'
      border='1px solid lightGrey'
    >
      <Button
        variant='fab'
        fullWidth={boolean('Full Width', false)}
        fontWeight={select(
          'Font Weight',
          {
            Regular: 'regular',
            Medium: 'medium',
            SemiBold: 'semiBold',
            Bold: 'bold'
          },
          'regular'
        )}
        {...args}
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const FabIcon: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Button variant='fab' variantType='icon' {...args}>
      <FaHamburger />
    </Button>
  </Flex>
)

export const Prefix: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Flex
      variant='centralized'
      height='200px'
      width='400px'
      border='1px solid lightGrey'
    >
      <Button
        fullWidth={boolean('Full Width', false)}
        variant={select(
          'variant',
          {
            Text: 'text',
            Contained: 'contained',
            Outlined: 'outlined',
            Fab: 'fab'
          },
          'text'
        )}
        {...args}
        prefix={<FaHamburger />}
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const PrefixAndSufix: React.FC = (args): ReactElement => (
  <Flex variant='fullCentralized'>
    <Flex
      variant='centralized'
      height='200px'
      width='400px'
      border='1px solid lightGrey'
    >
      <Button
        fullWidth={boolean('Full Width', false)}
        variant={select(
          'variant',
          {
            Text: 'text',
            Contained: 'contained',
            Outlined: 'outlined',
            Fab: 'fab'
          },
          'text'
        )}
        prefix={<FaHamburger />}
        sufix={<FaWater />}
        {...args}
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const ClickAction: React.FC = (args): ReactElement => {
  const handleClick = () => {
    alert('i really want a pizza')
  }

  return (
    <Flex variant='fullCentralized'>
      <Flex
        variant='centralized'
        height='200px'
        width='400px'
        border='1px solid lightGrey'
      >
        <Button
          onClick={() => handleClick()}
          fullWidth={boolean('Full Width', false)}
          variant={select(
            'variant',
            {
              Text: 'text',
              Contained: 'contained',
              Outlined: 'outlined',
              Fab: 'fab'
            },
            'contained'
          )}
          sufix={<FaHamburger />}
          {...args}
        >
          {text('Label', 'click me!')}
        </Button>
      </Flex>
    </Flex>
  )
}
