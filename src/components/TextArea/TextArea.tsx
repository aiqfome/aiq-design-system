import React from 'react'

import styled from 'styled-components'
import {
  margin,
  SpaceProps,
  layout,
  LayoutProps,
  FontSizeProps,
  FontWeightProps,
  TypographyProps,
  MarginProps
} from 'styled-system'

export type Props = MarginProps &
  SpaceProps &
  LayoutProps &
  FontSizeProps &
  FontWeightProps &
  TypographyProps & {
    name?: string
    placeholder?: string
    value?: string
    sufix?: any
    containerProps?: any
    disabled?: boolean

    maxWidth?: number | string
    backgroundColor?: number | string

    nativeAutoComplete?: 'on' | 'disabled'
  }

const StyledTextArea = styled.textarea<Props>`
  ${margin}
  ${layout}

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  padding: 4px 8px;
  background: #fff;
  font-size: ${props => props.theme.fontSizes.medium};
`

export const TextArea: React.FC<Props> = props => {
  return <StyledTextArea data-testid='textarea' {...props} />
}
