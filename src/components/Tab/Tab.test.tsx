import React, { useState } from 'react'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Tabs } from './Tabs'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'

import { render } from '../utils/test/render'

export const TabContent: React.FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Flex flexDirection='column'>
      <Tabs onChange={handleChange}>
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

describe('must match with the previous snapshot', () => {
  test('snapshot renders', () => {
    const component = render(<TabContent />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
