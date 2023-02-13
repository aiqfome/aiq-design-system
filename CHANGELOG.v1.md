## 0.6.0

_10/fevereiro/2023_

Para continuarmos evoluindo o aiq-design-system, será necessário que façamos uma migração de forma mais segura, então criaremos a `src/v1/components` para começar a lançar os novos componentes, sem afetar os atuais.

- adicionado suporte ao `stitches`
- a pasta `src/providers` foi refatorada, de forma que agora conseguimos utilizar o `stitches` para os novos componentes, sem deixar de funcionar o que já temos com `styled-components`
- foi adicionado um _alias_ de `@/*` para o `tsconfig.js`, `jest.config.js` e para o arquivo `/storybook/main.js`.

### `v1/Avatar`

- adicionado arquivo [`options.ts`](./src/v1/components/Avatar/options.ts) para padronizar os parametros de `data-testid` e facilitar uso em tests unitários e integrados.

- antes as iniciais eram obtidas a partir do paramêtro [`alt`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), porém esse parâmetro diz referente ao aspecto de acessibilidade de descrever o conteudo da imagem. Para adição das iniciais, será necessário enviar através do `children`

**[COMO ERA ANTES]**

para adicionar as inicias ficava assim:

```jsx
return <Avatar alt='John Wick' />
/* e no frontend aparecia a inicial "J" */
```

**[COMO FICOU AGORA]**:

Seguindo melhores práticas de semântica

```tsx
return <Avatar alt='foto do john wick de terno'>John Wick</Avatar>

/* e no frontend continua aparecendo a inicial "J" */
```

---

<!-- example -->

<!--
### `v1/Avatar`

- alterações relaziadas aqui...

-->
