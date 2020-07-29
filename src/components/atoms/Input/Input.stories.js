import React from 'react'
import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Input } from './Input'
import { Button } from '../Button'

export default {
  component: Input,
  title: atomicDir(base)
}

export const basic = () => <Input label="Aiqfome" />

export const errorMessage = () => <Input label="Aiqfome"  errorForm={true} errorMessage="Not Allowed" />

export const withValue = () => {
  const value = "hamburger";
  return <Input label="Aiqfome" value={value}/>
}

export const sufix = () => {
  const value = "hamburger";
  return <Input label="Aiqfome" sufix={(<Button mx={10}>Search</Button>)}/>
}

