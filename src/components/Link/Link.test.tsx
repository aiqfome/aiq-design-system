import React from 'react'

import { render } from '../utils/test/render'

import { Link } from '../Link'

describe('Link', () => {
  it('should have to render without crashing', () => {
    const component = render(<Link href='https://aiqfome.com/' />)
    expect(component).toBeTruthy()
  })

  it('should have to render a link external when variant is null', () => {
    const { getByTestId } = render(<Link href='https://aiqfome.com/' />)

    const link = getByTestId('link-external')
    expect(link).toBeTruthy()
  })

  it('should have to render a link external when variant is equal external', () => {
    const { getByTestId } = render(
      <Link variant='external' href='https://aiqfome.com/' />
    )

    const link = getByTestId('link-external')
    expect(link).toBeTruthy()
  })

  it('should have to render a link internal when variant is equal internal', () => {
    const { getByTestId } = render(<Link variant='internal' href='/food' />)

    const link = getByTestId('link-internal')
    expect(link).toBeTruthy()
  })

  it('should have to render a content when has children', () => {
    const { getByTestId } = render(
      <Link href='https://aiqfome.com/'>Aiqfome!</Link>
    )

    const link = getByTestId('link-external')

    expect(link).toHaveTextContent('Aiqfome!')
  })
})
