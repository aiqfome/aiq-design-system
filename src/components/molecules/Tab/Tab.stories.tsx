import React, { useState } from 'react'

import { Flex } from '../../atoms/Flex'
import { Tabs } from './Tabs'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'

export default {
  component: Tab,
  title: 'molecules/Tab'
}

export const Basic: React.FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Flex flexDirection='column'>
      <Tabs value={value} onChange={handleChange}>
        <Tab value={value} label='Item One' index={0} />
        <Tab value={value} label='Item Two' index={1} />
        <Tab value={value} label='Item Three' index={2} />
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
