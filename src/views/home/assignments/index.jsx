import Title from '@/components/title'
import { Card, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import AssignmentsComponentLayout from './assignments-component-layout'
import { Button } from '@/components/ui/button'

const Assignments = () => {
  const listAssigments = [
    {
      label: 'Segun Adebayo',
      avatar: '/assets/images/avatar-1.svg',
      number: '5'
    },
    {
      label: 'Segun Adebayo',
      avatar: '/assets/images/avatar-2.svg',
      number: '5'
    },
    {
      label: 'Segun Adebayo',
      avatar: '/assets/images/avatar-3.svg',
      number: '5'
    }
  ]

  return (
    <Card.Root flex={'1'} borderRadius='10px'>
      <Title label='Assignments' subTitle='Assignments to messengers' />
      <Card.Body
        display={'flex'}
        flexDirection={'column'}
        gap={'1rem'}
        justifyContent={'start'}
        alignItems={'start'}
      >
        {listAssigments?.map(({ label, avatar, number }, index) => {
          return (
            <AssignmentsComponentLayout
              key={index}
              label={label}
              avatar={avatar}
              number={number}
              backgroundColor={
                index % 2 === 0 ? 'hsla(210, 38%, 95%, 1)' : 'transparent'
              }
            />
          )
        })}
      </Card.Body>
      <Card.Footer>
        <Button>
          <Text
            fontFamily={'inter'}
            fontWeight={'600'}
            fontSize={'16px'}
            lineHeight={'24px'}
            color={'hsla(0, 0%, 100%, 1)'}
          >
            Assign All
          </Text>
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default Assignments
