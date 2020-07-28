---
to: src/components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/index.tsx
---
export * from './<%=h.inflection.camelize(name)%>'
