import React, { ReactElement } from 'react'

import { DropFile } from './DropFile'

import { Flex } from '../Flex'

export default {
  component: DropFile,
  title: 'DropFile'
}

export const Basic: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <DropFile dataMaxSize={2048} maxWidth='680px' width='100%' />
    </Flex>
  )
}

export const Translate: React.FC = (): ReactElement => {
  const translate = {
    message: {
      row1: 'arraste e solte a imagem aqui',
      row2: 'ou clique para escolher'
    },
    errorSize: 'hey! a imagem é muito grande, escolha uma imagem menor',
    errorType: 'hey! apenas os tipos de png e jpeg são aceitos'
  }

  return (
    <Flex variant='fullCentralized'>
      <DropFile translate={translate} maxWidth='680px' width='100%' />
    </Flex>
  )
}

export const InitImage: React.FC = (): ReactElement => {
  function handleOnChangeFile(e) {
    console.log(e)
  }

  return (
    <Flex variant='fullCentralized'>
      <DropFile
        dataMaxSize={5000}
        initImage={
          'https://cdn.startupi.com.br/wp-content/uploads/2019/12/Magalu-linx-marketplace.png'
        }
        onChange={handleOnChangeFile}
        maxWidth='680px'
        width='100%'
      />
    </Flex>
  )
}

export const Error: React.FC = (): ReactElement => {
  function handleOnChangeFile(e) {
    console.log(e)
  }

  return (
    <Flex variant='fullCentralized'>
      <DropFile
        dataMaxSize={5000}
        onChange={handleOnChangeFile}
        maxWidth='680px'
        width='100%'
        errorForm={true}
        errorMessage='Houston, we have a problem'
      />
    </Flex>
  )
}
