---
to: src/components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/index.js
---
export * from './<%=h.inflection.camelize(name)%>'
