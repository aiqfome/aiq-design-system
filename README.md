<p align="center">
  <a href="https://aiqfome.com/" rel="noopener" target="_blank"><img width="150" src="https://www.suafranquia.com/views/sources/images/franquias/logos/271b399b0a004c781779ec805e8d7ab7.png" alt="aiqfome logo"></a></p>
</p>

<h1 align="center">aiq design system</h1>

<div align="center">

A component lib in [React](https://reactjs.org/) developing for [aiqfome](http://www.aiqfome.com).

<p align="center">
  <a href="https://github.com/aiqfome" style="text-decoration:none" target="_blank">
    <img alt="Made by AiqFome" src="https://img.shields.io/badge/made%20by-aiqfome-blueviolet">
  </a>
  <a aria-label="contributors graph" href="https://github.com/aiqfome/aiq-design-system/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/aiqfome/aiq-design-system.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/aiqfome/aiq-design-system/commits/master">
    <img alt="" src=
  "https://img.shields.io/github/last-commit/aiqfome/aiq-design-system.svg">
  </a>
  <a aria-label="license" href="https://github.com/aiqfome/aiq-design-system/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/aiqfome/aiq-design-system.svg" alt="">
  </a>
</p>


[![npm package](https://img.shields.io/npm/v/aiq-design-system/latest.svg)](https://www.npmjs.com/package/aiq-design-system)
[![languages](https://img.shields.io/github/languages/count/aiqfome/aiq-design-system)](https://www.npmjs.com/package/aiq-design-system)
[![npm downloads](https://img.shields.io/npm/dm/aiq-design-system.svg)](https://www.npmjs.com/package/aiq-design-system)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

</div>

## How install

```sh
yarn add aiq-design-system

or

npm install aiq-design-system
```

## The components

[See all the components](https://5f8f398c11ba7b00229e5606-dlujpbuxgg.chromatic.com/?path=/story/actions--basic)

## How utilize

A quick use for the lib:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Input, Flex, ThemeProvider } from "aiq-design-system";

function App() {
  return (
    <ThemeProvider>
      <Flex p={20} flexDirection="column">
        <Input variant="outlined" label="I want Pizza!" />
        <Button variant="contained">aiq</Button>
      </Flex>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

A sandbox for interaction:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/aiq-design-system-yhpir?file=/src/App.js)
