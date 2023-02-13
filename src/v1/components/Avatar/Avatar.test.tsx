import React from 'react'

import { render } from '@/src/components/utils/test/render'

import { Avatar } from './Avatar'
import { testId } from './options'

describe('Avatar', () => {
  it('should have to render without crashing', () => {
    const component = render(<Avatar>avatar component!</Avatar>)
    expect(component).toBeTruthy()
  })

  it('should have to render with first letter of alt prop', () => {
    const { getByTestId } = render(<Avatar>avatar component!</Avatar>)
    expect(getByTestId(testId.text)).toHaveTextContent('A')
  })

  it('should have to render with first letter of initials prop', () => {
    const { getByTestId } = render(<Avatar>john wick</Avatar>)
    expect(getByTestId(testId.text)).toHaveTextContent('J')
  })

  it('should have to render a url when prop src is not null', () => {
    const url =
      'https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ'
    const { getByTestId } = render(<Avatar src={url}>john wick</Avatar>)
    expect(getByTestId(testId.image)).toBeVisible()
    expect(getByTestId(testId.image)).toHaveAttribute('src', url)
  })
})
