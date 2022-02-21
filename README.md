<p align="center">
  <a href="https://aiqfome.com/" rel="noopener" target="_blank"><img width="150" src="https://www.suafranquia.com/views/sources/images/franquias/logos/271b399b0a004c781779ec805e8d7ab7.png" alt="aiqfome logo"></a></p>
</p>

<h1 align="center">aiq design system</h1>

<div align="center">

a biblioteca de componentes para projetos React da galera do [aiqfome](http://www.aiqfome.com).

<p align="center">
  <a aria-label="contributors graph" href="https://github.com/aiqfome/aiq-design-system/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/aiqfome/aiq-design-system.svg">
  </a>
  
  <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/github/aiqfome/aiq-design-system.svg?logo=lgtm&logoWidth=18"/>
  
  <a aria-label="license" href="https://github.com/aiqfome/aiq-design-system/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/aiqfome/aiq-design-system.svg" alt="">
  </a>
  
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/aiq-design-system.svg?style=flat"/>
  
  [![npm downloads](https://img.shields.io/npm/dm/aiq-design-system.svg)](https://www.npmjs.com/package/aiq-design-system)
</p>

</div>

## como adicionar ao projeto

```sh
yarn add aiq-design-system

or

npm install aiq-design-system
```

## os componentes

nossos componentes estão nesse [storybook](https://www.chromatic.com/library?appId=621085ba70b9d2003a142b7d)

documentação oficial: **coming soon**

## configuração básica

pra começar a utilizar os componentes, segue esses passos:

1 - a gente disponibiliza um wrapper pra você adicionar na aplicação, é o `ThemeProvider` importado da **aiq-design-system**.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'aiq-design-system'

function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
```

2 - já pode sair utilizando os componentes importados da **aiq-design-system**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Flex, Input } from "aiq-design-system";

export const AiqComponent() {
  return (
    <Flex p={20} flexDirection="column">
      <Input variant="outlined" label="duas pizzas é muito?" />
      <Button variant="contained">fazer pedido!</Button>
    </Flex>
  )
}

```

## template no codesandbox

temos um template configurado no codesandbox com a lib configurada!

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/aiq-design-system-yukfc)
