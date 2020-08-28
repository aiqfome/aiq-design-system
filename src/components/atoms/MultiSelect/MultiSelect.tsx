import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

import { Flex } from '../Flex'
import { Box } from '../Box'
import { Text } from '../Text'
import { Divider } from '../Divider'
import { Button } from '../Button'

export interface Props {
  maxWidth?: number | string
  itens: {
    value: any
    label: string
  }[]
}

const MultiSelectStyled = styled(Box)`
  position: relative;
  width: 100%;

  &:hover {
    cursor: text;
  }
`

const Overflow = styled(Flex)`
  position: absolute;
  width: 100%;
  border-top: none;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 3px 10px;

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`

const Itens = styled(Box)`
  max-height: 250px;
  overflow: auto;
`

export const MultiSelect: React.FC<Props> = ({ itens, maxWidth, ...props }) => {
  return (
    <MultiSelectStyled maxWidth={maxWidth} {...props}>
      <Flex
        backgroundColor='white'
        borderRadius={4}
        py={3}
        px={5}
        border='1px solid #dedede'
      >
        <Flex
          py={2}
          px={4}
          mr={3}
          display='flex'
          flexDirection='row'
          alignItems='center'
          backgroundColor='primary'
          borderRadius='3px'
        >
          <Text cursor='pointer' color='white'>
            Maringa/PR
          </Text>
          <Button ml={6}>
            <MdClose color='#fff' />
          </Button>
        </Flex>
        <Flex
          py={2}
          px={4}
          display='flex'
          flexDirection='row'
          alignItems='center'
          backgroundColor='primary'
          borderRadius='3px'
        >
          <Text cursor='pointer' color='white'>
            +3
          </Text>
        </Flex>
      </Flex>
      <Overflow
        py={7}
        flexDirection='column'
        backgroundColor='white'
        border='1px solid #dedede'
      >
        <ul>
          <li>
            <Text cursor='pointer'>todas as cidades</Text>
          </li>
          <li>
            <Text cursor='pointer'>unidades próprias</Text>
          </li>
          <li>
            <Text cursor='pointer'>limpar cidades selecionadas</Text>
          </li>
        </ul>
        <Divider mx={5} my={4} />
        <Itens>
          <ul>
            {itens.map(item => (
              <li key={item.value}>{item.label}</li>
            ))}
          </ul>
        </Itens>
      </Overflow>
    </MultiSelectStyled>
  )
}

MultiSelect.propTypes = {
  itens: PropTypes.array.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
