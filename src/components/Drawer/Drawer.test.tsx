import { fireEvent } from '@testing-library/react'
import React from 'react'

import { Drawer } from '../Drawer'
import { render } from '../utils/test/render'

describe('Drawer', () => {
  it('should have to render without crashing', () => {
    const component = render(<Drawer opened />)
    expect(component).toBeTruthy()
  })

  it('should call onClose when click on mask', () => {
    const handleOnClose = jest.fn()

    const { getByTestId } = render(<Drawer opened onClose={handleOnClose} />)
    const mask = getByTestId('drawer-mask')
    fireEvent.click(mask)
    expect(handleOnClose).toHaveBeenCalled()
  })

  it('should have class when it is closed', () => {
    const { getByTestId } = render(<Drawer opened={false} />)
    const drawer = getByTestId('drawer-content')
    expect(drawer).toHaveClass('drawer-close')
  })

  it('should have svg when have loading prop', () => {
    const { getByTestId } = render(<Drawer opened loading />)
    const drawer = getByTestId('drawer-content')
    const svg = drawer.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })
})
