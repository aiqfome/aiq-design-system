import React from 'react'

import { render } from '../utils/test/render'

import { Modal } from './Modal'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
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
      visible: true
    }
    function onClose() {
      console.log('onClose')
    }

    const component = render(
      <Modal
        title='TESTE'
        show={false}
        onClose={onClose}
        okButton={okButton}
        cancelButton={cancelButton}
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
