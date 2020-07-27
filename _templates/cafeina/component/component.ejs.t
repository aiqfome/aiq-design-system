---
to: src/components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/<%=h.inflection.camelize(name)%>.js
---
import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

export const <%=h.inflection.camelize(name)%>Styled = styled.div``

export const <%=h.inflection.camelize(name)%> = props => {
  return <<%=h.inflection.camelize(name)%>Styled {...props} />
}

<%=h.inflection.camelize(name)%>.propTypes = {}

<%=h.inflection.camelize(name)%>.defaultProps = {}
