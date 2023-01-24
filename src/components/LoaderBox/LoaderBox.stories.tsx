import React from 'react'

import { LoaderBox } from './LoaderBox'

import { createPageExport } from '../../utils/storybook'

export default createPageExport(LoaderBox, 'LoaderBox', [])

export const basic: React.FC = () => <LoaderBox />
