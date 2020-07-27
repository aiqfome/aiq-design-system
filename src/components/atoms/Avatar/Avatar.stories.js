import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Avatar } from './Avatar'

export default {
  component: Avatar,
  title: atomicDir(base)
}

export const basic = () => <Avatar />

export const withUrl= () => <Avatar src="https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ" alt="avatar" />
