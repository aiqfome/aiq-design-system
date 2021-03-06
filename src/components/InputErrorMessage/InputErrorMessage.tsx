import React from 'react'

import { Text } from '../Text'

interface Props {
  errorForm?: boolean
  errorMessage?: string
}

export const InputErrorMessage: React.FC<Props> = ({ errorMessage }: Props) => {
  return (
    <Text data-testid='input-error' color='grey' fontSize='small' mt={2}>
      {errorMessage}
    </Text>
  )
}
