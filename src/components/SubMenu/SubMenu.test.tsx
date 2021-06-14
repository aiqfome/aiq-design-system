import React from 'react'

import { SubMenu } from '../SubMenu'
import { render } from '../utils/test/render'

describe('SubMenu', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <SubMenu content='teste'>
        <div>content</div>
      </SubMenu>
    )
    expect(component).toBeTruthy()
  })
})
