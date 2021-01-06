import React from 'react'

import 'react-dates/initialize'
import { fireEvent } from '@testing-library/react'

import { Flex } from '../Flex'
import { Button } from '../Button'
import { render } from '../utils/test/render'
import { ToastProvider, useToast } from './index'

const ContentToast: React.FC = () => {
  const { addToast } = useToast()

  function showToast() {
    addToast({
      type: 'success',
      title: 'Hi ✌️',
      description: 'I am a success toast'
    })
  }

  return (
    <Flex variant='fullCentralized'>
      <Button
        palette='primary'
        variant='contained'
        data-testid='action'
        onClick={showToast}
      >
        Show Toast
      </Button>
    </Flex>
  )
}

describe('Toast', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <ToastProvider>
        <ContentToast />
      </ToastProvider>
    )

    expect(component).toBeTruthy()
  })

  it('should render a toast', () => {
    const { getByTestId } = render(
      <ToastProvider>
        <ContentToast />
      </ToastProvider>
    )

    const button = getByTestId('action')
    fireEvent.click(button)

    expect(getByTestId('toast-container')).toBeTruthy()
  })

  it('should render toast content correctly', () => {
    const { getByTestId } = render(
      <ToastProvider>
        <ContentToast />
      </ToastProvider>
    )

    const button = getByTestId('action')
    fireEvent.click(button)

    expect(getByTestId('toast-content')).toHaveTextContent(
      'I am a success toast'
    )
  })

  it('should render 3 toasts', () => {
    const { getByTestId, getAllByTestId } = render(
      <ToastProvider>
        <ContentToast />
      </ToastProvider>
    )

    const button = getByTestId('action')
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(getAllByTestId('toast-content')).toHaveLength(3)
  })
})
