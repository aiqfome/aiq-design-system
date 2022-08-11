import React, { useState } from 'react'

import Menu from 'rc-menu'

import { Flex } from '../Flex'
import styled from 'styled-components'

export interface Props {
  content?: any
  children?: any
  menuProps?: any
  popoverProps?: any
}

const ItemStyled = styled(Menu.Item)`
  border-radius: 8px;
  padding: 13px !important;
  border: 1px solid #dedede;
  box-shadow: 0px 1px 6px #0000001a;
`

let clicked = false

export const SubMenu: React.FC<Props> = ({
  content,
  children,
  menuProps = {},
  popoverProps = {},
  ...props
}) => {
  const [keys, setKeys] = useState(['submenu'])

  const onOpenChange = keys => {
    if (!clicked) setKeys(keys)
    else clicked = false
  }

  const onClick = () => (clicked = true)

  return (
    <Flex {...props}>
      <Menu onOpenChange={onOpenChange} {...menuProps}>
        <Menu.SubMenu
          key='menu'
          title={children}
          onClick={onClick}
          expandIcon={<Flex />}
        >
          {keys.includes('menu') && (
            <ItemStyled key='submenu' {...popoverProps}>
              {content}
            </ItemStyled>
          )}
        </Menu.SubMenu>
      </Menu>
    </Flex>
  )
}
