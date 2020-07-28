---
to: src/components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/<%=h.inflection.camelize(name)%>.tsx
---
import React from 'react'

import styled from 'styled-components'

export interface Props {}

export const <%=h.inflection.camelize(name)%>Styled = styled.div<Props>``

export const <%=h.inflection.camelize(name)%>: React.FC<Props> = ({...props}) => {
  return <<%=h.inflection.camelize(name)%>Styled {...props} />
}