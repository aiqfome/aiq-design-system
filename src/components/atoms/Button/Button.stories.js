import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Button } from './Button'

export default {
  component: Button,
  title: atomicDir(base)
}

export const basic = () => <Button  palette='primary' variant='contained' >Teste</Button>
