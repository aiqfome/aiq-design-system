import React from 'react'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Divider } from './Divider'

export default {
  component: Divider,
  title: 'atoms/Divider'
}

export const Basic: React.FC = () => (
  <Flex width='100%'>
    <Divider width='100%' />
  </Flex>
)

export const withChildren: React.FC = () => (
  <Divider width='100%' color='primary'>
    <Text paddingRight={10} paddingLeft={10}>
      Aiqfome!
    </Text>
  </Divider>
)

export const Height: React.FC = () => (
  <Divider margin={10} height={5} color='secondary' />
)
