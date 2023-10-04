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

export const Disabled: React.FC = args => {
  const [defaultValue, setDefaultValue] = useState(0)
  const [containedValue, setContainedValue] = useState(0)
  const [cardValue, setCardValue] = useState(0)

  return (
    <>
      <Text>Variant default:</Text>
      <Flex flexDirection='column'>
        <Tabs onChange={(e, newValue) => setDefaultValue(newValue)} {...args}>
          <Tab value={defaultValue} index={0}>
            <Text fontSize={2}>Item One</Text>
          </Tab>
          <Tab value={defaultValue} index={1} disabled>
            <Text fontSize={2}>Item Disabled</Text>
          </Tab>
          <Tab value={defaultValue} index={2}>
            <Text fontSize={2}>Item Three</Text>
          </Tab>
        </Tabs>
      </Flex>

      <Text>Variant contained:</Text>
      <Flex flexDirection='column'>
        <Tabs
          variant='contained'
          onChange={(e, newValue) => setContainedValue(newValue)}
          {...args}
        >
          <Tab variant='contained' value={containedValue} index={0}>
            <Text fontSize={2}>Item One</Text>
          </Tab>
          <Tab variant='contained' value={containedValue} index={1} disabled>
            <Text fontSize={2}>Item Disabled</Text>
          </Tab>
          <Tab variant='contained' value={containedValue} index={2}>
            <Text fontSize={2}>Item Three</Text>
          </Tab>
        </Tabs>
      </Flex>

      <Text>Variant card:</Text>
      <Flex flexDirection='column'>
        <Tabs
          variant='card'
          onChange={(e, newValue) => setCardValue(newValue)}
          {...args}
        >
          <Tab variant='card' value={cardValue} index={0}>
            <Text fontSize={2}>Item One</Text>
          </Tab>
          <Tab variant='card' value={cardValue} index={1} disabled>
            <Text fontSize={2}>Item Disabled</Text>
          </Tab>
          <Tab variant='card' value={cardValue} index={2}>
            <Text fontSize={2}>Item Three</Text>
          </Tab>
        </Tabs>
      </Flex>
    </>
  )
}
