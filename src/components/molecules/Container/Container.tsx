import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import { Divider } from '../../atoms/Divider'
import { Flex } from '../../atoms/Flex'
import { Text } from '../../atoms/Text'

export interface Props {
  title?: string
  header?: ReactNode
  children?: ReactNode
}

const StyledContainer: React.FC = ({ children, ...props }) => {
  return (
    <Flex
      flexDirection='column'
      border='1px solid lightGrey'
      borderRadius='12px'
      backgroundColor='white'
      m={10}
      {...props}
    >
      {children}
    </Flex>
  )
}

export const Container: React.FC<Props> = ({
  title,
  header,
  children,
  ...props
}) => {
  if (title) {
    return (
      <StyledContainer {...props}>
        <Text color='almostBlack' fontSize='xxlarge' p={10}>
          {title}
        </Text>

        <Divider />

        {children}
      </StyledContainer>
    )
  }

  if (header) {
    return (
      <StyledContainer {...props}>
        {header}

        <Divider />

        {children}
      </StyledContainer>
    )
  }

  return <StyledContainer {...props}>{children}</StyledContainer>
}

StyledContainer.propTypes = {
  children: PropTypes.node
}

Container.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  children: PropTypes.node
}
