import React from 'react'

import { MdHome } from 'react-icons/md'

import { Breadcrumb } from './Breadcrumb'

import { render } from '../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Breadcrumb
        routes={[
          {
            path: '/',
            name: 'início',
            icon: <MdHome />,
            type: 'external'
          },
          {
            path: '#',
            name: 'relatório',
            type: 'external'
          },
          {
            path: '#',
            name: 'pedidos',
            type: 'external'
          }
        ]}
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
