import React from 'react'

import { Box } from '../Box'
import { Text } from '../Text'

interface Props {
  errorForm?: boolean
  errorMessage?: string
}

export const InputErrorMessage: React.FC<Props> = ({
  errorForm,
  errorMessage
}: Props) => {
  if (errorForm) {
    return (
      <Text color='grey' fontSize='small' mt={2}>
        {errorMessage}
      </Text>
    )
  }

  return <Box height='20px' />
}
