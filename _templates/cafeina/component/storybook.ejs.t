---
to: src/components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/<%=h.inflection.camelize(name)%>.stories.js
---
import React from 'react'

import base from 'paths.macro'
import { atomicDir } from 'utils/helpers/atomicDir'

import { <%=h.inflection.camelize(name)%> } from './<%=h.inflection.camelize(name)%>'

export default {
  component: <%=h.inflection.camelize(name)%>,
  title: atomicDir(base)
}

export const basic = () => <<%=h.inflection.camelize(name)%> />
