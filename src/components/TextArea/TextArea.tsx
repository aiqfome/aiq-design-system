import React, { TextareaHTMLAttributes } from 'react'

import styled, { css } from 'styled-components'
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
import { InputErrorMessage } from '../InputErrorMessage'
import { Flex } from '../Flex'

export type Props = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'prefix'
> &
  MarginProps &
  SpaceProps &
  LayoutProps &
  FontSizeProps &
  FontWeightProps &
  TypographyProps & {
    name?: string
    value?: string
    sufix?: any
    containerProps?: any
    disabled?: boolean
    errorMessage?: string
    errorForm?: boolean
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

  ${({ theme, errorForm }) =>
    errorForm &&
    css`
      border-color: ${theme.colors.error};
    `};
`
export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ errorForm, errorMessage, ...props }, ref) => (
    <Flex flexDirection='column'>
      <StyledTextArea
        data-testid='textarea'
        ref={ref}
        errorForm={errorForm}
        {...props}
      />

      {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
    </Flex>
  )
)
