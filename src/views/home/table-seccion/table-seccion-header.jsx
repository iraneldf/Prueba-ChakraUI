import { Box, Card, Flex, Heading, HStack, Input, Text } from '@chakra-ui/react'
import React from 'react'

const TableSeccionHeader = () => {
  return (
    <Card.Header>
      <Flex direction='row' alignItems='center' justifyContent='space-between'>
        <Box>
          <Heading fontWeight='bold' size='lg'>
            Orders
          </Heading>
          <Text textStyle='sm' color={'gray'}>
            Order Summary
          </Text>
        </Box>

        <Box>
          <HStack spacing={4}>
            <Input name='email' type='date' />
            <Input name='email' type='date' />
          </HStack>
        </Box>
      </Flex>
    </Card.Header>
  )
}

export default TableSeccionHeader
