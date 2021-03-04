import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import { Divider } from '../Divider'
import { Flex } from '../Flex'
import { Text } from '../Text'
import { Tabs, Tab } from '../Tab'

interface TabProps {
  content: any
  index: number
  value?: number
  active?: boolean
  variant?: 'default' | 'contained' | 'card'
}

export interface Props {
  tabs?: Array<TabProps>
  title?: string
  tabIndex?: number
  header?: ReactNode
  children?: ReactNode
  containerProps?: any
  tabsExtra?: ReactNode
  onChangeTab?: (event: any, newValue: any) => void
}

const StyledContainer: React.FC<Props> = ({
  children,
  tabIndex,
  tabs = [],
  ...props
}) => {
  let border = '12px'
  if (tabs.length && tabIndex === 0) {
    border = '0 12px 12px 12px'
  }

  return (
    <Flex
      borderRadius={border}
      flexDirection='column'
      backgroundColor='white'
      border='1px solid lightGrey'
      mt={tabs.length && '-1px'}
      {...props}
    >
      {children}
    </Flex>
  )
}

const ContainerWrapper: React.FC<Props> = ({
  title,
  header,
  children,
  ...props
}) => {
  if (title) {
    return (
      <StyledContainer data-testid='container' {...props}>
        <Text
          data-testid='container-text'
          color='almostBlack'
          fontWeight='medium'
          fontSize='xxlarge'
          p={10}
        >
          {title}
        </Text>

        <Divider />

        {children}
      </StyledContainer>
    )
  }

  if (header) {
    return (
      <StyledContainer data-testid='container' {...props}>
        {header}

        <Divider />

        {children}
      </StyledContainer>
    )
  }

  return (
    <StyledContainer data-testid='container' {...props}>
      {children}
    </StyledContainer>
  )
}

export const Container: React.FC<Props> = ({
  children,
  tabIndex,
  tabs = [],
  tabsExtra,
  onChangeTab,
  containerProps,
  ...props
}) => {
  return (
    <Flex flexDirection='column' {...containerProps}>
      {tabs.length > 0 && (
        <Tabs
          mr='10px'
          pr='15px'
          data-testid='container-tab'
          variant='card'
          extra={tabsExtra}
          onChange={onChangeTab}
        >
          {tabs.map((tab, index) => (
            <Tab
              {...tab}
              data-testid='container-tab-item'
              variant='card'
              value={tabIndex}
              key={tab.index || index}
              index={tab.index || index}
            >
              {tab.content}
            </Tab>
          ))}
        </Tabs>
      )}

      <ContainerWrapper tabIndex={tabIndex} tabs={tabs} {...props}>
        {children}
      </ContainerWrapper>
    </Flex>
  )
}

StyledContainer.propTypes = {
  tabs: PropTypes.array,
  children: PropTypes.node,
  tabIndex: PropTypes.number
}

Container.propTypes = {
  tabs: PropTypes.array,
  header: PropTypes.node,
  title: PropTypes.string,
  tabsExtra: PropTypes.any,
  children: PropTypes.node,
  tabIndex: PropTypes.number,
  onChangeTab: PropTypes.func,
  containerProps: PropTypes.object
}

ContainerWrapper.propTypes = {
  tabs: PropTypes.array,
  header: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node
}
