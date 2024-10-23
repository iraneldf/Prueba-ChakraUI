import React from 'react'
import BadgesRow from '../badges-row'
import { Box } from '@chakra-ui/react'

const ToolBar = () => {
  return (
    <Box
      width={'100%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent='flex-end'
    >
      <BadgesRow />
    </Box>
  )
}

export default ToolBar
