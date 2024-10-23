import { Box, Card } from '@chakra-ui/react'
import React from 'react'
import TableSeccionHeader from './table-seccion-header'
import Assignments from '../assignments'

const TableSeccion = () => {
  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'row'}
      gap={'1rem'}
      alignItems={'start'}
      justifyContent='flex-start'
    >
      <Card.Root border={'none'} boxShadow='xs' borderRadius='10px' flex={'4'}>
        <TableSeccionHeader />
        <Card.Body />
        <Card.Footer />
      </Card.Root>

      <Assignments />
    </Box>
  )
}

export default TableSeccion
