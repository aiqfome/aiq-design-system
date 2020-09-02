import React from 'react'
import PropTypes from 'prop-types'
import { space, SpaceProps } from 'styled-system'
import styled, { css } from 'styled-components'

export interface TabProps extends SpaceProps {
  index: number
  children: any
  value?: number
  active?: boolean
  variant?: 'default' | 'contained' | 'card'
}

interface StyledProps {
  active?: boolean
  variant?: 'default' | 'contained' | 'card'
}

const tabVariations: { [index: string]: any } = {
  default: css<StyledProps>`
    padding: 8px 21px;
    ${({ active, theme }) =>
      active
        ? css`
            font-weight: ${theme.fontWeights.medium};
            color: ${theme.colors.primary};
            &::before {
              background: ${theme.colors.primary};
              animation: show 0.25s;
              @keyframes show {
                from {
                  transform: scale(0);
                }
                to {
                  transform: scale(1);
                }
              }
            }
          `
        : css`
            font-weight: ${theme.fontWeights.regular};
            color: ${theme.colors.darkGrey};
            &::before {
              background: transparent;
            }
          `}
  `,
  contained: css<StyledProps>`
    padding: 10px 17px;
    ${({ active, theme }) =>
      active
        ? css`
            font-weight: ${theme.fontWeights.semiBold};
            color: ${theme.colors.black};
            background: ${theme.colors.white};
            border-radius: 5px;
            border: 1px solid ${theme.colors.mediumGrey};
          `
        : css`
            font-weight: ${theme.fontWeights.regular};
            color: ${theme.colors.darkGrey};
          `}
  `,
  card: css<StyledProps>`
    padding: 10px 17px;
    ${({ active, theme }) =>
      active
        ? css`
            color: ${theme.colors.almostBlack};
            background: ${theme.colors.white};
            border-radius: 5px 5px 0 0;
            border: 1px solid ${theme.colors.mediumGrey};
            border-bottom: 0px;
            color: ${theme.colors.primary};
            font-weight: ${theme.fontWeights.medium};
          `
        : css`
            font-weight: ${theme.fontWeights.regular};
            color: ${theme.colors.darkGrey};
          `}
  `
}

const TabStyled = styled.li<StyledProps>`
  ${space}

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: -1px;
    width: 100%;
    height: 3px;
    border-radius: 3px 3px 0 0;
  }

  ${({ variant }) => tabVariations[variant || 'default']}
`

export const Tab: React.FC<TabProps> = ({
  children,
  value = 0,
  index,
  ...props
}) => {
  function handleClick(event) {
    event.currentTarget.parentNode.setAttribute('data-id', index)
  }

  return (
    <TabStyled onClick={handleClick} active={index === value} {...props}>
      {children}
    </TabStyled>
  )
}

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
  value: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'contained', 'card'])
}

Tab.defaultProps = {
  variant: 'default'
}
