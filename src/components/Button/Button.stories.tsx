import React, { ReactElement } from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { FaHamburger } from 'react-icons/fa'

import { Button } from './Button'
import { Flex } from '../Flex'

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs as any]
}

export const Text: React.FC = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Button
      variant='text'
      palette={select(
        'Palette',
        {
          Primary: 'primary',
          Secondary: 'secondary',
          Neutral: 'neutral'
        },
        'primary'
      )}
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
    >
      {text('Label', 'aiqfome!')}
    </Button>
  </Flex>
)

export const Contained: React.FC = (): ReactElement => (
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
        palette={select(
          'Palette',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Neutral: 'neutral'
          },
          'primary'
        )}
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
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const Disabled: React.FC = (): ReactElement => (
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
        palette={'primary'}
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

export const Outlined: React.FC = (): ReactElement => (
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
        palette={select(
          'Palette',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Neutral: 'neutral'
          },
          'primary'
        )}
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
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const Fab: React.FC = (): ReactElement => (
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
        palette={select(
          'Palette',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Neutral: 'neutral'
          },
          'primary'
        )}
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
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const FabIcon: React.FC = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Button
      variant='fab'
      variantType='icon'
      palette={select(
        'Palette',
        {
          Primary: 'primary',
          Secondary: 'secondary',
          Neutral: 'neutral'
        },
        'primary'
      )}
    >
      <FaHamburger />
    </Button>
  </Flex>
)

export const Prefix: React.FC = (): ReactElement => (
  <Flex variant='fullCentralized'>
    <Flex
      variant='centralized'
      height='200px'
      width='400px'
      border='1px solid lightGrey'
    >
      <Button
        fullWidth={boolean('Full Width', false)}
        palette={select(
          'Palette',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Neutral: 'neutral'
          },
          'primary'
        )}
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
      >
        {text('Label', 'aiqfome!')}
      </Button>
    </Flex>
  </Flex>
)

export const ClickAction: React.FC = (): ReactElement => {
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
          palette={select(
            'Palette',
            {
              Primary: 'primary',
              Secondary: 'secondary',
              Neutral: 'neutral'
            },
            'primary'
          )}
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
        >
          {text('Label', 'click me!')}
        </Button>
      </Flex>
    </Flex>
  )
}
