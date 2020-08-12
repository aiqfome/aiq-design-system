import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

export interface Props {
  children?: any
}

const BreadcrumbStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`

const BreadcrumbItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  &:last-child {
    color: ${({ theme }) => theme.colors.primary};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:after {
      content: '';
    }
  }

  &:after {
    margin-right: 8px;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.darkGrey};
    content: ' / ';
  }
`

export const BreadcrumbItem: React.FC<Props> = ({ children }) => {
  return <BreadcrumbItemStyled>{children}</BreadcrumbItemStyled>
}

BreadcrumbItem.propTypes = {
  children: PropTypes.any
}

export const Breadcrumb: React.FC<Props> = ({ children }) => {
  return <BreadcrumbStyled>{children}</BreadcrumbStyled>
}

Breadcrumb.propTypes = {
  children: PropTypes.any
}
