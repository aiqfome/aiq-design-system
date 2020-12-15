import React from 'react'

import { render } from '../utils/test/render'

import { Text } from './Text'

describe('Text', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Text
        color='primary'
        fontSize='medium'
        width='100%'
        cursor='pointer'
        fontWeight='semiBold'
        textAlign='center'
        truncate
      >
        o design system do app mais fominha da internê!
      </Text>
    )
    expect(component).toBeTruthy()
  })
})
