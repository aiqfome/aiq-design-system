import React, { useEffect } from 'react'

import { ToastProvider, useToast } from './index'

import { Flex } from '../../atoms/Flex'

import { render } from '../../utils/test/render'

const ContentToast = () => {
  const { addToast } = useToast()

  useEffect(() => {
    addToast({
      title: 'Hi ✌️',
      description: 'I am a toast'
    })
  })

  return <Flex>Toast component!</Flex>
}

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <ToastProvider>
        <ContentToast />
      </ToastProvider>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
