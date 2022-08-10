import React from 'react'
import styled from 'styled-components'

import { Flex, Props as FlexProps } from '../Flex'

export type TabPanelProps = FlexProps & {
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
