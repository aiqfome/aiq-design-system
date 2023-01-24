import React from 'react'
import { Link as LinkRouterDom } from 'react-router-dom'

import styled, { css } from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

export type Props = ColorProps &
  SpaceProps &
  LayoutProps &
  FontSizeProps &
  FontWeightProps & {
    variant?: 'internal' | 'external'
    href: string
    children?: any
    color?: string
    onClick?: any
  }

export interface StyledProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  to?: string
  href?: string
  children?: any
  color?: string
}

const styledLink = css`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}

  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

const InternalStyled = styled(LinkRouterDom)<StyledProps>`
  ${styledLink}
`
const ExternalStyled = styled.a<StyledProps>`
  ${styledLink}
`

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ variant = 'external', href, children, ...props }, ref) => {
    if (variant === 'internal') {
      return (
        <InternalStyled
          data-testid='link-internal'
          to={href}
          {...props}
          ref={ref}
        >
          {children}
        </InternalStyled>
      )
    }
    return (
      <ExternalStyled
        data-testid='link-external'
        href={href}
        {...props}
        ref={ref}
      >
        {children}
      </ExternalStyled>
    )
  }
)
