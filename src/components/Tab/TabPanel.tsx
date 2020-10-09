import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Flex, Props as FlexProps } from '../Flex'

export interface TabPanelProps extends FlexProps {
  value: number
  index: number
  children?: any
}

const TabPanelStyled = styled(Flex)`
  display: block;
`

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...props
}) => {
  return value === index ? (
    <TabPanelStyled {...props}>{children}</TabPanelStyled>
  ) : null
}

TabPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.any
}
