import React from 'react'

import { render } from '../utils/test/render'

import { Tab } from './Tab'

describe('Tab', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Tab value={1} index={1}>
        o design system do app mais fominha da internê!
      </Tab>
    )
    expect(component).toBeTruthy()
  })

  it('should have content when has children', () => {
    const { container } = render(
      <Tab value={1} index={1}>
        o design system do app mais fominha da internê!
      </Tab>
    )

    expect(container).toHaveTextContent(
      'o design system do app mais fominha da internê!'
    )
  })
})
