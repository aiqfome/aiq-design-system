import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { Avatar } from './Avatar'

export default {
  component: Avatar,
  title: 'Avatar',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => (
  <Avatar
    alt={text('Label', 'Avatar')}
    src={text('src', '')}
    palette={select(
      'palette',
      { Primary: 'primary', Secondary: 'secondary' },
      'primary'
    )}
  />
)

export const WithUrl: React.FC = () => (
  <Avatar
    palette={select(
      'palette',
      { Primary: 'primary', Secondary: 'secondary' },
      'primary'
    )}
    src={text(
      'src',
      'https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ'
    )}
    alt={text('alt', 'Avatar')}
  />
)

export const Rounded: React.FC = () => (
  <Avatar
    palette={select(
      'palette',
      { Primary: 'primary', Secondary: 'secondary' },
      'primary'
    )}
    alt={text('alt', 'Avatar')}
    variant='rounded'
  />
)
