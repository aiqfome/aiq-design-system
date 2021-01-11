import React from 'react'

import { render } from '../utils/test/render'

import { TabPanel } from './TabPanel'

describe('TabPanel', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <TabPanel value={1} index={1}>
        o design system do app mais fominha da internê!
      </TabPanel>
    )
    expect(component).toBeTruthy()
  })

  it('should have content when has children', () => {
    const { container } = render(
      <TabPanel value={1} index={1}>
        o design system do app mais fominha da internê!
      </TabPanel>
    )

    expect(container).toHaveTextContent(
      'o design system do app mais fominha da internê!'
    )
  })

  it('should not have content when value and index are different', () => {
    const { container } = render(
      <TabPanel value={1} index={2}>
        o design system do app mais fominha da internê!
      </TabPanel>
    )
    expect(container).not.toHaveTextContent(
      'o design system do app mais fominha da internê!'
    )
  })
})
