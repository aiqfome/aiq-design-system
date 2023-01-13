import React, { useState } from 'react'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Tabs } from './Tabs'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'extra',
  'children',
  'wrapperProps',
  'isMobile',
  'variant',
  'scrollPosition',
  'onChange'
]

export default createPageExport(Tabs, 'Tabs', aiqProps, {
  argTypes: {
    isMobile: { control: 'boolean' },
    variant: { control: 'select', options: ['default', 'contained', 'card'] },
    scrollPosition: { control: 'select', options: ['left', 'middle', 'right'] }
  }
})

export const Basic: React.FC = args => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Flex flexDirection='column'>
      <Tabs onChange={handleChange} extra='teste' width='100%' {...args}>
        <Tab value={value} index={0}>
          <Text fontSize={5} cursor='pointer'>
            Item One
          </Text>
        </Tab>
        <Tab value={value} index={1}>
          <Text fontSize={5} cursor='pointer'>
            Item Two
          </Text>
        </Tab>
        <Tab value={value} index={2}>
          <Text fontSize={5} cursor='pointer'>
            Item Three
          </Text>
        </Tab>
        <Tab value={value} index={2}>
          <Text fontSize={5} cursor='pointer'>
            Item Three
          </Text>
        </Tab>
        <Tab value={value} index={2}>
          <Text fontSize={5} cursor='pointer'>
            Item Three
          </Text>
        </Tab>
        <Tab value={value} index={2}>
          <Text fontSize={5} cursor='pointer'>
            Item Three
          </Text>
        </Tab>
        <Tab value={value} index={2}>
          <Text fontSize={5} cursor='pointer'>
            Item Three
          </Text>
        </Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Flex>
  )
}

export const Contained: React.FC = args => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Flex flexDirection='column'>
      <Tabs variant='contained' onChange={handleChange} {...args}>
        <Tab variant='contained' value={value} index={0}>
          <Text fontSize={2} cursor='pointer'>
            Item One
          </Text>
        </Tab>
        <Tab variant='contained' value={value} index={1}>
          <Text fontSize={2} cursor='pointer'>
            Item Two
          </Text>
        </Tab>
        <Tab variant='contained' value={value} index={2}>
          <Text fontSize={2} cursor='pointer'>
            Item Three
          </Text>
        </Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Flex>
  )
}

export const Card: React.FC = args => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Flex flexDirection='column'>
      <Tabs onChange={handleChange} {...args}>
        <Tab variant='card' value={value} index={0}>
          <Text fontSize={2} cursor='pointer'>
            Item One
          </Text>
        </Tab>
        <Tab variant='card' value={value} index={1}>
          <Text fontSize={2} cursor='pointer'>
            Item Two
          </Text>
        </Tab>
        <Tab variant='card' value={value} index={2}>
          <Text fontSize={2} cursor='pointer'>
            Item Three
          </Text>
        </Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Flex>
  )
}
