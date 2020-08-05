import React from 'react'
import PropTypes from 'prop-types'
import { space, SpaceProps } from 'styled-system'
import { Text } from '../../atoms/Text'
import styled, { css } from 'styled-components'

export interface Props extends SpaceProps {
  label?: string
  index: number
  value: number
  children?: any
  active?: boolean
}

const TabStyled = styled.li<{ active?: boolean }>`
  ${space}
  position: relative;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    content: '';
    bottom: -1px;
    width: 100%;
    height: 3px;
    border-radius: 3px 3px 0 0;

    ${({ active, theme }) =>
      active
        ? css`
            background: ${theme.colors.primary};
            animation: show 0.25s;
            @keyframes show {
              from {
                transform: scale(0);
              }
              to {
                transform: scale(1);
              }
          `
        : css`
            background: transparent;
          `}
  }

  &:hover {
    cursor: pointer;
  }
`

const TextStyled = styled(Text)<{ active?: boolean }>`
  text-align: center;

  ${({ active, theme }) =>
    active
      ? css`
          font-weight: 'medium';
          color: ${theme.colors.primary};
        `
      : css`
          font-weight: 'regular';
          color: ${theme.colors.darkGrey};
        `}
`

export const Tab: React.FC<Props> = ({ label, index, value, ...props }) => {
  return (
    <TabStyled active={value === index} marginRight='8px' {...props}>
      <TextStyled
        active={value === index}
        fontSize={5}
        id={`tab-item-${index}`}
        cursor='pointer'
      >
        {label}
      </TextStyled>
    </TabStyled>
  )
}

Tab.propTypes = {
  label: PropTypes.string,
  index: PropTypes.number.isRequired,
  children: PropTypes.any,
  value: PropTypes.number.isRequired
}
