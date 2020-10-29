import React from 'react'

import { MdStore } from 'react-icons/md'
import { render } from '../utils/test/render'

import { Icon } from '../Icon'

describe('Icon', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Icon color='primary'>
        <MdStore />
      </Icon>
    )
    expect(component).toBeTruthy()
  })
})
