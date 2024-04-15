import React, { ReactElement } from 'react'

import { ModernDropFile } from './ModernDropFile'
import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'dataMaxSize',
  'onChange',
  'initImage',
  'name',
  'onVerityType',
  'translate',
  'width',
  'maxWidth',
  'errorMessage',
  'errorForm'
]

export default createPageExport(ModernDropFile, 'ModernDropFile', aiqProps, {
  argTypes: {
    errorForm: { control: 'boolean' }
  },
  args: {
    maxWidth: '680px',
    width: '100%'
  }
})

export const Basic: React.FC = (args): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <ModernDropFile dataMaxSize={2048} {...args} />
    </Flex>
  )
}

export const Translate: React.FC = (args): ReactElement => {
  const translate = {
    message: 'escolha ou arraste e solte o arquivo',
    errorSize: 'hey! a imagem é muito grande, escolha uma imagem menor',
    errorType: 'hey! apenas os tipos de png e jpeg são aceitos'
  }

  return (
    <Flex variant='fullCentralized'>
      <ModernDropFile translate={translate} {...args} />
    </Flex>
  )
}

export const InitImage: React.FC = (args): ReactElement => {
  function handleOnChangeFile(e) {
    console.log(e)
  }

  return (
    <Flex variant='fullCentralized'>
      <ModernDropFile
        dataMaxSize={5000}
        initImage={
          'https://cdn.startupi.com.br/wp-content/uploads/2019/12/Magalu-linx-marketplace.png'
        }
        onChange={handleOnChangeFile}
        {...args}
      />
    </Flex>
  )
}

export const Error = (args): ReactElement => {
  function handleOnChangeFile(e) {
    console.log(e)
  }

  return (
    <Flex variant='fullCentralized'>
      <ModernDropFile
        dataMaxSize={5000}
        onChange={handleOnChangeFile}
        {...args}
      />
    </Flex>
  )
}
Error.args = {
  errorForm: true,
  errorMessage: 'Houston, we have a problem!'
}
