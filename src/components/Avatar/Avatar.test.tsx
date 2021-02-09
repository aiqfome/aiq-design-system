import React from 'react'

import { render } from '../utils/test/render'

import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('should have to render without crashing', () => {
    const component = render(<Avatar alt='avatar component!' />)
    expect(component).toBeTruthy()
  })

  it('should have to render with first letter of alt prop', () => {
    const { getByTestId } = render(<Avatar alt='avatar component!' />)
    expect(getByTestId('name')).toHaveTextContent('A')
  })

  it('should have to render a url when prop src is not null', () => {
    const url =
      'https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ'
    const { getByTestId } = render(<Avatar src={url} alt='avatar component!' />)
    expect(getByTestId('src')).toBeVisible()
    expect(getByTestId('src')).toHaveAttribute('src', url)
  })
})
