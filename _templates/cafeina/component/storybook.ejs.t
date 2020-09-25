---
to: src/components/<%=h.inflection.camelize(name)%>/<%=h.inflection.camelize(name)%>.stories.tsx
---
import React, { ReactElement } from 'react'

import { <%=h.inflection.camelize(name)%> } from './<%=h.inflection.camelize(name)%>'

export default {
  component: <%=h.inflection.camelize(name)%>,
  title: '<%=h.inflection.camelize(name)%>'
}

export const Basic: React.FC = (): ReactElement => <<%=h.inflection.camelize(name)%> />
