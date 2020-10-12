import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SpaceProps, space, LayoutProps, layout } from 'styled-system'
import styled, { css, DefaultTheme } from 'styled-components'

import { Flex } from '../Flex'

export interface TabsProps extends SpaceProps, LayoutProps, DefaultTheme {
  extra?: any
  children?: any
  isMobile?: boolean
  variant?: 'default' | 'contained' | 'card'
  scrollPosition?: 'left' | 'middle' | 'right'
  onChange?: (event: any, newValue: any) => void
}

const tabsVariations: { [index: string]: any } = {
  default: css`
    &::before {
      position: absolute;
      content: '';
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 1px;
      background: #d9d9d9;
    }
  `,
  contained: css`
    background: #f5f5f5;
    border-radius: 5px;
    padding: 4px 5px;
  `,
  card: css`
    margin-bottom: 0;
  `
}

const TabStyled = styled.ul<TabsProps>`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-bottom: 20px;
  align-items: center;
  width: 100%;
  position: relative;

  ${space}
  ${layout}

  ${({ variant }) => tabsVariations[variant || 'default']}
`

const FlexStyled = styled.div<TabsProps>`
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;

  ::before {
    position: absolute;
    z-index: 1;
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    content: '';
    pointer-events: none;
    left: 0;
    -webkit-box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.39);
    box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.39);
    top: 0;
    bottom: 0;
    width: 30px;
  }

  ::after {
    position: absolute;
    z-index: 1;
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    content: '';
    pointer-events: none;
    right: 0;
    -webkit-box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.39);
    box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.39);
    top: 0;
    bottom: 0;
    width: 30px;
  }

  ${({ scrollPosition, isMobile }) => {
    if (isMobile) {
      if (scrollPosition === 'left') {
        return css`
          ::after {
            opacity: 1;
          }
        `
      }

      if (scrollPosition === 'right') {
        return css`
          ::before {
            opacity: 1;
          }
        `
      }

      return css`
        ::after {
          opacity: 1;
        }

        ::before {
          opacity: 1;
        }
      `
    }
  }}
`

export const Tabs: React.FC<TabsProps> = ({
  extra,
  children,
  onChange = () => {
    // do nothing.
  },
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [scrollPosition, setScrollPosition] = useState<
    'left' | 'middle' | 'right'
  >('left')

  useEffect(() => {
    const handleResize = () => {
      if (ref && ref.scrollWidth !== ref.clientWidth) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    if (ref) {
      handleResize()
      window.addEventListener('resize', handleResize)
    }
  }, [ref])

  useEffect(() => {
    const handleScroll = e => {
      if (ref && isMobile) {
        ref.scrollLeft += e.deltaY

        if (ref.scrollLeft === 0) {
          setScrollPosition('left')
        } else if (ref.offsetWidth + ref.scrollLeft === ref.scrollWidth) {
          setScrollPosition('right')
        } else {
          setScrollPosition('middle')
        }
      }
    }

    if (ref) {
      ref.addEventListener('wheel', handleScroll)
    }
  }, [ref, isMobile])

  function handleClick(event) {
    onChange(event, parseInt(event.currentTarget.dataset.id))
  }

  return (
    <TabStyled {...props}>
      <FlexStyled isMobile={isMobile} scrollPosition={scrollPosition}>
        <Flex
          flex={1}
          overflow='hidden'
          position='relative'
          onClick={handleClick}
          ref={el => setRef(el || null)}
        >
          {children}
        </Flex>
      </FlexStyled>

      {extra && <Flex px='12px'>{extra}</Flex>}
    </TabStyled>
  )
}

Tabs.propTypes = {
  extra: PropTypes.any,
  children: PropTypes.any,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'contained', 'card'])
}

Tabs.defaultProps = {
  variant: 'default'
}
