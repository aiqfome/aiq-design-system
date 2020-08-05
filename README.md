<p align="center">
  <a href="https://aiqfome.com/" rel="noopener" target="_blank"><img width="150" src="https://www.suafranquia.com/views/sources/images/franquias/logos/271b399b0a004c781779ec805e8d7ab7.png" alt="Material-UI logo"></a></p>
</p>

<h1 align="center">aiq design system</h1>

<div align="center">

A biblioteca de componentes [React](https://reactjs.org/) desenvolvida pelo [aiqfome](http://www.aiqfome.com).

[![languages](https://img.shields.io/github/languages/count/aiqfome/aiq-design-system)](https://www.npmjs.com/package/aiq-design-system)
[![npm package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/aiq-design-system)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/aiq-design-system)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

</div>

## Como instalar

```sh
yarn add aiq-design-system

ou

npm install aiq-design-system
```

## Como utilizar

Uma forma rápida de como usar a lib:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'aiq-design-system'

function App() {
  return (
    <Button variant='contained' palette='primary'>
      Quero pizza!
    </Button>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

Disponibilizamos um sandbox pra uma interação rápida com a nossa lib:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/festive-dew-dk509?file=/src/App.js)

## Licença

Esse projeto está sob os termos da
[Licença MIT](/LICENSE).
