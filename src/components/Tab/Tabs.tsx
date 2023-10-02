import React, { useEffect, useState, useRef } from 'react'

import { SpaceProps, space, LayoutProps, layout } from 'styled-system'
import styled, { css, DefaultTheme } from 'styled-components'

import { Flex } from '../Flex'

export type TabsProps = SpaceProps &
  LayoutProps &
  DefaultTheme & {
    extra?: any
    children?: any
    wrapperProps?: any
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

const FlexStyled = styled(Flex)<TabsProps>`
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

const InnerFlex = styled(Flex)<TabsProps>`
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
  -webkit-overflow-scrolling: auto;

  span {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
export const Tabs = React.forwardRef<HTMLUListElement, TabsProps>(
  (
    {
      extra,
      children,
      wrapperProps,
      onChange = () => {
        // do nothing.
      },
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false)
    const [scrollPosition, setScrollPosition] = useState<
      'left' | 'middle' | 'right'
    >('left')

    const refFlex = useRef(document.createElement('div'))

    useEffect(() => {
      const handleResize = () => {
        if (
          refFlex.current &&
          refFlex.current.scrollWidth !== refFlex.current.clientWidth
        ) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      }

      if (refFlex) {
        handleResize()
        window.addEventListener('resize', handleResize)
      }
    }, [refFlex])

    useEffect(() => {
      const handleScroll = e => {
        if (refFlex && isMobile) {
          if (e.type === 'wheel') {
            refFlex.current.scrollLeft += e.deltaY
          }

          if (refFlex.current.scrollLeft === 0) {
            setScrollPosition('left')
          } else if (
            Math.floor(
              refFlex.current.offsetWidth + refFlex.current.scrollLeft
            ) === refFlex.current.scrollWidth
          ) {
            setScrollPosition('right')
          } else {
            setScrollPosition('middle')
          }
        }
      }

      if (refFlex) {
        refFlex.current.addEventListener('wheel', handleScroll)
        refFlex.current.addEventListener('touchmove', handleScroll)
      }
    }, [refFlex, isMobile])

    function handleClick(event) {
      const { id } = event.currentTarget.dataset

      if (children[id]) {
        onChange(event, parseInt(id))
      }
    }

    return (
      <TabStyled data-testid='tabs' ref={ref} {...props}>
        <FlexStyled isMobile={isMobile} scrollPosition={scrollPosition}>
          <InnerFlex
            flex={1}
            ref={refFlex}
            onClick={handleClick}
            data-testid='tabs-container'
            {...wrapperProps}
          >
            {children}
          </InnerFlex>
        </FlexStyled>

        {extra && <Flex px='12px'>{extra}</Flex>}
      </TabStyled>
    )
  }
)

Tabs.defaultProps = {
  variant: 'default'
}
