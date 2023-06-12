import React from 'react'

import { fireEvent } from '@testing-library/react'
import 'react-dates/initialize'

import { Button } from '../Button'
import { Flex } from '../Flex'
import { render } from '../utils/test/render'
import { ToastProvider, useToast } from './index'

const ContentToast: React.FC<{ duration?: number }> = ({ duration }) => {
  const { addToast } = useToast()

  function showToast() {
    addToast({
      type: 'success',
      title: 'Hi ✌️',
      description: 'I am a success toast',
      duration
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

  it('should have duration of 4 seconds', async () => {
    jest.useFakeTimers()

    const { getByTestId, getByText } = render(
      <ToastProvider>
        <ContentToast duration={4} />
      </ToastProvider>
    )

    fireEvent.click(getByTestId('action'))

    expect(getByText('I am a success toast')).toBeInTheDocument()

    jest.advanceTimersByTime(4000)

    expect(getByTestId('toast-container')).toHaveStyle('display: none')
  })
})
