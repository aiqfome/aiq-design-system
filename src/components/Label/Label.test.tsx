import React from 'react'

import { render } from '../utils/test/render'

import { Label } from './Label'

describe('Text', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Label
        color='primary'
        fontSize='medium'
        width='100%'
        fontWeight='semiBold'
        textAlign='center'
      >
        o design system do app mais fominha da internê!
      </Label>
    )
    expect(component).toBeTruthy()
  })

  it('should have content when has children', () => {
    const { getByText } = render(
      <Label
        color='primary'
        fontSize='medium'
        width='100%'
        fontWeight='semiBold'
        textAlign='center'
      >
        o design system do app mais fominha da internê!
      </Label>
    )

    const div = getByText('o design system do app mais fominha da internê!')
    expect(div).toBeTruthy()
  })
})
