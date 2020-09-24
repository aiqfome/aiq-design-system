import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Flex } from '../Flex'

export const TableHead: React.FC = ({ children, ...props }) => {
  const tableProps = useMemo(() => {
    const prop = {
      borderCollapse: 'collapse',
      borderBottom: '0.5px solid',
      borderColor: 'grey',
      flex: 1,
      justifyContent: 'space-between',
      ...props
    }

    return prop
  }, [props])

  return <Flex {...tableProps}>{children}</Flex>
}

TableHead.propTypes = {
  children: PropTypes.node
}
