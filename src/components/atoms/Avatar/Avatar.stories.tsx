import React from 'react'

import { Avatar } from './Avatar'

export default {
  component: Avatar,
  title: 'atoms/Avatar'
}

export const basic: React.FC = () => <Avatar alt='avatar' />

export const withUrl: React.FC = () => (
  <Avatar
    src='https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ'
    alt='avatar'
  />
)
