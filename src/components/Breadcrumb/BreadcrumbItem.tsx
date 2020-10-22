import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexProps } from 'styled-system'
import { MdArrowDropDown } from 'react-icons/md'

import { Flex } from '../Flex'

export interface PropsItem {
  children?: any
  overlay?: any
  className?: string
}

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

const OverlayStyled = styled(Flex)`
  position: relative;
`

const OverlayContentStyled = styled(Flex)<FlexProps>`
  position: absolute;
  top: 18px;
  width: max-content;
  background: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  transition: opacity 300ms, visibility 300ms;

  &.__breadcrumb-item-overflow-hidden {
    opacity: 0;
    visibility: hidden;
  }

  &.__breadcrumb-item-overflow-visible {
    visibility: visible;
    opacity: 1;
  }
`

export const BreadcrumbItem: React.FC<PropsItem> = ({
  overlay,
  children,
  ...props
}) => {
  const [classActiveOverflow, setClassActiveOverflow] = useState(
    '__breadcrumb-item-overflow-hidden'
  )

  const handleOnMouseOver = useCallback(() => {
    setClassActiveOverflow('__breadcrumb-item-overflow-visible')
  }, [])

  const handleOnMouseOut = useCallback(() => {
    setClassActiveOverflow('__breadcrumb-item-overflow-hidden')
  }, [])

  if (overlay) {
    return (
      <BreadcrumbItemStyled
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        {...props}
      >
        <OverlayStyled data-testid='crumb-item-overflow'>
          {children}
          <MdArrowDropDown />

          <OverlayContentStyled
            data-testid='overlay-content'
            className={classActiveOverflow}
          >
            {overlay}
          </OverlayContentStyled>
        </OverlayStyled>
      </BreadcrumbItemStyled>
    )
  }

  return <BreadcrumbItemStyled {...props}>{children}</BreadcrumbItemStyled>
}

BreadcrumbItem.propTypes = {
  children: PropTypes.any,
  overlay: PropTypes.any
}
