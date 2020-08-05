import React from 'react'
import PropTypes from 'prop-types'
import styled, { DefaultTheme } from 'styled-components'

export interface Props extends DefaultTheme {
  value?: number
  children?: any
  onChange?: (event: any, newValue: any) => void
}

const TabStyled = styled.ul<Props>`
  display: flex;
  width: max-content;
  flex-direction: row;
  list-style: none;
  margin-bottom: 20px;
  border-bottom: 1px solid #d9d9d9;
`

export const Tabs: React.FC<Props> = ({
  children,
  onChange = () => {
    // do nothing.
  },
  ...props
}) => {
  function handleClick(event) {
    const idSlitted = event.target.id.split('tab-item-')
    onChange(event, parseInt(idSlitted[1]))
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
  onChange: PropTypes.func
}
