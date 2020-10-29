import React from 'react'

import { fireEvent } from '@testing-library/react'

import { render } from '../utils/test/render'

import { Flex } from '../Flex'

describe('Flex', () => {
  it('should have to render without crashing', () => {
    const component = render(<Flex flexDirection='row' />)
    expect(component).toBeTruthy()
  })

  it('should have to render a div', () => {
    const { container } = render(<Flex flexDirection='row' />)
    const div = container.querySelector('div')
    expect(div).toBeInTheDocument()
  })

  it('should have to call onClick when click on div', () => {
    const handleOnClick = jest.fn()
    const { getByTestId } = render(
      <Flex onClick={handleOnClick} flexDirection='row' />
    )

    const div = getByTestId('flex')
    fireEvent.click(div)

    expect(handleOnClick).toHaveBeenCalled()
  })

  it('should have content when has children', () => {
    const { getByText } = render(<Flex flexDirection='row'>Flex!</Flex>)
    const div = getByText('Flex!')
    expect(div).toBeTruthy()
  })

  it('should have class __flex-variant-centralized when variant equal centralized', () => {
    const { getByTestId } = render(<Flex variant='centralized' />)

    const div = getByTestId('flex')

    expect(div).toHaveClass('__flex-variant-centralized')
  })

  it('should have class __flex-variant-fullCentralized when variant equal fullCentralized', () => {
    const { getByTestId } = render(<Flex variant='fullCentralized' />)

    const div = getByTestId('flex')

    expect(div).toHaveClass('__flex-variant-fullCentralized')
  })

  it('should have class __fle-fullHeight when have prop fullHeight', () => {
    const { getByTestId } = render(<Flex fullHeight={true} />)

    const div = getByTestId('flex')

    expect(div).toHaveClass('__flex-fullHeight')
  })

  it('should have the same class that was pass to prop', () => {
    const { getByTestId } = render(<Flex className='test' />)

    const div = getByTestId('flex')

    expect(div).toHaveClass('test')
  })
})
