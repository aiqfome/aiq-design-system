import React from 'react'
import PropTypes from 'prop-types'
import { space, SpaceProps } from 'styled-system'
import styled, { css } from 'styled-components'

export interface Props extends SpaceProps {
  index: number
  children: any
  value?: number
  active?: boolean
}

interface StyledProps {
  active?: boolean
}

const TabStyled = styled.li<StyledProps>`
  ${space}

  position: relative;
  padding: 8px 16px;
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
  ${({ active, theme }) =>
    active
      ? css`
          font-weight: 'medium';
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
          font-weight: 'regular';
          color: ${theme.colors.darkGrey};
          &::before {
            background: transparent;
          }
        `}
`

export const Tab: React.FC<Props> = ({
  children,
  value = 0,
  index,
  ...props
}) => {
  function handleClick(event) {
    event.currentTarget.parentNode.setAttribute('data-id', index)
  }

  return (
    <TabStyled
      onClick={handleClick}
      active={index === value}
      marginRight='8px'
      {...props}
    >
      {children}
    </TabStyled>
  )
}

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
  value: PropTypes.number
}
