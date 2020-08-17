import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

export interface Props {
  steps: {
    name: string
    component: any
  }[]
  stepActive: number
}

const MultistepStyled = styled.div``

export const Multistep: React.FC<Props> = () => {
  return <MultistepStyled />
}

Multistep.propTypes = {
  steps: PropTypes.array.isRequired,
  stepActive: PropTypes.number.isRequired
}
