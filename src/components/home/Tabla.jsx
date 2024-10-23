import { Box, Flex, HStack, Stack, Table, Text, VStack } from '@chakra-ui/react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot
} from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'

import { defineTextStyles } from '@chakra-ui/react'

export const textStyles = defineTextStyles({
  body: {
    description: 'The body text style - used in paragraphs',
    value: {
      fontFamily: 'Lato',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '24',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None'
    }
  }
})

const Tabla = () => {
  return (
    <>
      <Flex
        direction='column'
        gap={'20px'}
        alignItems='center'
        justifyContent='center'
      >
        <Table.Root size='md' striped={'false'} colorPalette='gray'>
          <Table.Header bg={'#FFFFFF'}>
            <Table.Row>
              <Table.ColumnHeader
                fontSize={'12px'}
                fontWeight={'700'}
                color={'#4A5568'}
              >
                ORDER ID
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize={'12px'}
                fontWeight={'700'}
                color={'#4A5568'}
              >
                NAME
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize={'12px'}
                fontWeight={'700'}
                color={'#4A5568'}
              >
                PRODUCTS
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize={'12px'}
                fontWeight={'700'}
                color={'#4A5568'}
              >
                EMAIL/PHONE
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize={'12px'}
                fontWeight={'700'}
                color={'#4A5568'}
              >
                Status
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign='end'></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map(item => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell textAlign='end'>
                  <Button size={'sm'} bg={'#FF7500'} borderRadius={'16px'}>
                    Assign
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <PaginationRoot
          w={'100%'}
          count={6}
          pageSize={2}
          defaultPage={1}
          siblingCount={3}
        >
          <Flex
            direction='row'
            gap={'300px'}
            alignItems='center'
            justifyContent='space-between'
          >
            <HStack color={'#FF7500'}>
              <GoArrowLeft />
              <Text
                color={'#FF750080'}
                fontFamily={'lato'}
                aling-selft={'start'}
              >
                Preview
              </Text>
            </HStack>

            <Flex direction='row' gap={'5px'} alignItems='center'>
              <PaginationItems />
            </Flex>
            <HStack color={'#FF7500'}>
              <Text fontFamily={'lato'}>Next</Text>
              <GoArrowRight />
            </HStack>
          </Flex>
        </PaginationRoot>
      </Flex>
    </>
  )
}

const items = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 999.99
  },
  {
    id: 2,
    name: 'Coffee Maker',
    category: 'Home Appliances',
    price: 49.99
  },
  {
    id: 3,
    name: 'Desk Chair',
    category: 'Furniture',
    price: 150.0
  },
  {
    id: 4,
    name: 'Smartphone',
    category: 'Electronics',
    price: 799.99
  },
  {
    id: 5,
    name: 'Headphones',
    category: 'Accessories',
    price: 199.99
  }
]
export default Tabla
