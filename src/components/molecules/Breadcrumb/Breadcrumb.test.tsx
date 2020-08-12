import React from 'react'

import { Breadcrumb, BreadcrumbItem } from './Breadcrumb'
import { Link } from '../../atoms/Link'

import { render } from '../../utils/test/render'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(
      <Breadcrumb>
        <BreadcrumbItem>
          <Link marginLeft='5px' href='#'>
            início
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href='#'>relatório</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href='#'>pedidos</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
