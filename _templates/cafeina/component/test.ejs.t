---
to: src/components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/<%=h.inflection.camelize(name)%>.test.tsx
---
import React from 'react'
import renderer from 'react-test-renderer'

import { <%=h.inflection.camelize(name)%> } from './<%=h.inflection.camelize(name)%>'

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<<%=h.inflection.camelize(name)%> />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
