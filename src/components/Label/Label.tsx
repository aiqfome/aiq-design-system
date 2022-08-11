import styled from 'styled-components'
import {
  margin,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  FontSizeProps,
  FontWeightProps,
  TypographyProps,
  MarginProps,
  FlexProps,
  flex
} from 'styled-system'

export type Props = ColorProps &
  MarginProps &
  SpaceProps &
  LayoutProps &
  FontSizeProps &
  FontWeightProps &
  TypographyProps &
  FlexProps

export const Label = styled.label<Props>`
  ${space}
  ${margin}
  ${layout}
  ${flex}

  display: flex;
  align-items: center;
`
