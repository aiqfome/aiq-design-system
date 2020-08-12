import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Link } from './Link'

export default {
  component: Link,
  title: 'atoms/Link'
}

export const Basic: React.FC = () => (
  <Link color='primary' href='https://aiqfome.com/'>
    Aiqfome
  </Link>
)

export const External: React.FC = () => (
  <Link color='primary' variant='external' href='https://aiqfome.com/'>
    Aiqfome
  </Link>
)

export const Internal: React.FC = () => (
  <Router>
    <Link color='primary' variant='internal' href='/food'>
      Aiqfome
    </Link>
  </Router>
)
