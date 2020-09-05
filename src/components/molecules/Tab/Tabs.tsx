import React from 'react'
import PropTypes from 'prop-types'
import { SpaceProps, space } from 'styled-system'
import styled, { css, DefaultTheme } from 'styled-components'

export interface TabsProps extends SpaceProps, DefaultTheme {
  value?: number
  children?: any
  variant?: 'default' | 'contained' | 'card'
  onChange?: (event: any, newValue: any) => void
}

const tabsVariations: { [index: string]: any } = {
  default: css`
    border-bottom: 1px solid #d9d9d9;
  `,
  contained: css`
    background: #f5f5f5;
    border-radius: 5px;
    padding: 4px 5px;
  `,
  card: css`
    margin-bottom: 0px;
  `
}

const TabStyled = styled.ul<TabsProps>`
  display: flex;
  width: max-content;
  flex-direction: row;
  list-style: none;
  margin-bottom: 20px;

  ${space}

  ${({ variant }) => tabsVariations[variant || 'default']}
`

export const Tabs: React.FC<TabsProps> = ({
  children,
  onChange = () => {
    // do nothing.
  },
  ...props
}) => {
  function handleClick(event) {
    onChange(event, parseInt(event.currentTarget.dataset.id))
  }

  return (
    <TabStyled onClick={handleClick} {...props}>
      {children}
    </TabStyled>
  )
}

Tabs.propTypes = {
  value: PropTypes.number,
  children: PropTypes.any,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'contained', 'card'])
}

Tabs.defaultProps = {
  variant: 'default'
}
