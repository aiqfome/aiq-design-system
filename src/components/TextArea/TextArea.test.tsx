import React from 'react'

import { render } from '../utils/test/render'

import { TextArea } from './TextArea'

describe('TextArea', () => {
  it('should have to render without crashing', () => {
    const component = render(<TextArea />)
    expect(component).toBeTruthy()
  })

  it('should render placeholder when have placeholder prop', () => {
    const content = 'My placeholder'
    const { getByTestId } = render(<TextArea placeholder={content} />)

    const textarea = getByTestId('textarea')

    expect(textarea).toBeTruthy()
    expect(textarea).toHaveAttribute('placeholder', 'My placeholder')
  })

  it('should show error message when provided', () => {
    const errorMessage = 'campo obrigatório'
    const { getByText } = render(
      <TextArea errorForm={!!errorMessage} errorMessage={errorMessage} />
    )

    expect(getByText(errorMessage)).toBeInTheDocument()
  })
})
