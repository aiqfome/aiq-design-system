import { fireEvent } from '@testing-library/react'
import React from 'react'

import { Modal } from '.'
import { render } from '../utils/test/render'

describe('Modal', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <div id='modal-root'>
        <Modal title='title' show />
      </div>
    )
    expect(component).toBeTruthy()
  })

  it('should call onClose when click on mask', () => {
    const handleOnClose = jest.fn()

    const { getByTestId } = render(
      <div id='modal-root'>
        <Modal show title='title' onClose={handleOnClose} />
      </div>
    )

    const mask = getByTestId('modal-container')
    fireEvent.click(mask)
    expect(handleOnClose).toHaveBeenCalled()
  })

  it('should have to render a title', () => {
    const { getByTestId } = render(
      <div id='modal-root'>
        <Modal show title='title' />
      </div>
    )

    const modal = getByTestId('modal-title')

    expect(modal).toBeTruthy()
    expect(modal).toHaveTextContent('title')
  })

  it('should have class when it is closed', () => {
    const { queryAllByTestId } = render(
      <div id='modal-root'>
        <Modal title='title' show={false} />
      </div>
    )

    const modal = queryAllByTestId('modal-container')
    expect(modal.length).toBe(0)
  })

  it('should have a content when have a children', () => {
    const content = 'My Content'
    const { getByTestId } = render(
      <div id='modal-root'>
        <Modal show title='title'>
          {content}
        </Modal>
      </div>
    )

    expect(getByTestId('modal-container')).toHaveTextContent(content)
  })

  it('should have just okButton and not cancelButton', () => {
    const okButton = {
      label: 'ok',
      function: () => {
        console.log('ok')
      },
      visible: true
    }

    const cancelButton = {
      label: 'cancel',
      function: () => {
        console.log('cancel')
      },
      visible: false
    }

    const content = 'My Content'
    const { getAllByTestId } = render(
      <div id='modal-root'>
        <Modal
          show
          title='title'
          okButton={okButton}
          cancelButton={cancelButton}
        >
          {content}
        </Modal>
      </div>
    )

    expect(getAllByTestId('modal-button').length).toBe(1)
  })
})
