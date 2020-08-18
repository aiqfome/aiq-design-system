import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import { Divider } from '../../atoms/Divider'
import { Box } from '../../atoms/Box'
import { Text } from '../../atoms/Text'

export interface Props {
  title?: string
  children?: ReactNode
}

export const Container: React.FC<Props> = ({ title, children }) => {
  return (
    <Box border='1px solid lightGrey' borderRadius='12px' m={10}>
      {title && (
        <>
          <Box p={10}>
            <Text color='almostBlack' fontSize='xxlarge'>
              {title}
            </Text>
          </Box>

          <Divider />
        </>
      )}

      {children}
    </Box>
  )
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
