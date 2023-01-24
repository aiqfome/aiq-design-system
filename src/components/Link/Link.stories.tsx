import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Link } from './Link'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['variant', 'href', 'children', 'color']

export default createPageExport(Link, 'Link', aiqProps, {
  argTypes: {
    variant: {
      control: 'select',
      options: ['internal', 'external']
    },

    color: { control: 'text' },
    href: { control: 'text' }
  },
  args: {
    color: 'primary',
    href: 'https://aiqfome.com/'
  }
})

export const Basic = args => <Link {...args}>Aiqfome</Link>

export const External = args => <Link {...args}>Aiqfome</Link>
External.args = {
  variant: 'external'
}

export const Internal = args => (
  <Router>
    <Link {...args}>Aiqfome</Link>
  </Router>
)
Internal.args = {
  variant: 'internal',
  href: '/food'
}
