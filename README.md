<p align="center">
  <a href="https://lite.grandchef.com.br/" rel="noopener" target="_blank"><img width="150" src="public/logo.png" alt="rosalvo logo"></a></p>
</p>

<h1 align="center">rosalvo design system</h1>

<div align="center">

A component lib in [React](https://reactjs.org/) developing for [Rosalvo](https://lite.grandchef.com.br/).

<p align="center">
  <a href="https://github.com/grandchef" style="text-decoration: none" target="_blank">
    <img alt="Made by GrandChef" src="https://img.shields.io/badge/made%20by-grandchef-orange">
  </a>
  <a aria-label="contributors graph" href="https://github.com/grandchef/rosalvo-design-system/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/grandchef/rosalvo-design-system">
  </a>
  <a aria-label="last commit" href="https://github.com/grandchef/rosalvo-design-system/commits/master">
    <img alt="" src=
  "https://img.shields.io/github/last-commit/grandchef/rosalvo-design-system">
  </a>
</p>

[![npm package](https://img.shields.io/npm/v/@grandchef/rosalvo-design-system/latest)](https://www.npmjs.com/package/@grandchef/rosalvo-design-system)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![license](https://img.shields.io/github/license/grandchef/rosalvo-design-system)](https://github.com/grandchef/rosalvo-design-system/blob/master/LICENSE)

</div>

## How install

```sh
yarn add @grandchef/rosalvo-design-system

or

npm install @grandchef/rosalvo-design-system
```

## How utilize

A quick use for the lib:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Input, Flex, ThemeProvider } from "rosalvo-design-system";

function App() {
  return (
    <ThemeProvider>
      <Flex p={20} flexDirection="column">
        <Input variant="outlined" label="I want Pizza!" />
        <Button variant="contained">ros</Button>
      </Flex>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

A sandbox for interaction:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rosalvo-design-system-yhpir?file=/src/App.js)
