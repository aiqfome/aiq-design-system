import React, { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'

import { Divider } from '../../atoms/Divider'
import { Flex } from '../../atoms/Flex'
import { Text } from '../../atoms/Text'
import { Tabs, Tab } from '../Tab'

interface TabProps {
  content: any
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
      m={tabs.length ? '-1px 10px 10px' : '10px'}
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
      <StyledContainer {...props}>
        <Text color='almostBlack' fontWeight='medium' fontSize='xxlarge' p={10}>
          {title}
        </Text>

        <Divider />

        {children}
      </StyledContainer>
    )
  }

  if (header) {
    return (
      <StyledContainer {...props}>
        {header}

        <Divider />

        {children}
      </StyledContainer>
    )
  }

  return <StyledContainer {...props}>{children}</StyledContainer>
}

export const Container: React.FC<Props> = ({
  children,
  tabs = [],
  onChangeTab,
  ...props
}) => {
  const [tabIndex, setTabIndex] = useState(0)

  const onChange = (event, index) => {
    if (onChangeTab) {
      onChangeTab(event, index)
    }

    setTabIndex(index)
  }

  return (
    <>
      {tabs.length && (
        <Tabs variant='card' mx='10px' value={tabIndex} onChange={onChange}>
          {tabs.map((tab, index) => (
            <Tab
              {...tab}
              key={index}
              index={index}
              variant='card'
              value={tabIndex}
            >
              {tab.content}
            </Tab>
          ))}
        </Tabs>
      )}

      <ContainerWrapper tabIndex={tabIndex} tabs={tabs} {...props}>
        {children}
      </ContainerWrapper>
    </>
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
  children: PropTypes.node,
  onChangeTab: PropTypes.func
}

ContainerWrapper.propTypes = {
  tabs: PropTypes.array,
  header: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node
}
