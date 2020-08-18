import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Divider } from '../../atoms/Divider'
import { Box } from '../../atoms/Box'
import { Text } from '../../atoms/Text'

const ContainerStyled = styled(Box)``

export const Container: React.FC = ({ title, children }: any) => {
  return (
    <ContainerStyled border='1px solid lightGrey' borderRadius='12px' m={10}>
      <Box p={10}>
        <Text color='almostBlack' fontSize='xxlarge'>
          {title}
        </Text>
      </Box>

      <Divider />

      {children}
    </ContainerStyled>
  )
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
