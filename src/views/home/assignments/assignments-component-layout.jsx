import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from '@/components/ui/avatar'

const AssignmentsComponentLayout = ({
  label = 'Segun Adebayo',
  avatar = '/assets/images/avatar-1.svg',
  number = '5',
  backgroundColor = 'hsla(210, 38%, 95%, 1)',
}) => {
  return (
    <Box
      backgroundColor={backgroundColor}
      display={{ base: 'none', md: 'flex' }}
      justifyContent='start'
      alignItems='center'
      gap='10px'
      padding={'10px'}
      width={'100%'}
    >
      <Box
        flexGrow={1}
        display={{ base: 'none', md: 'flex' }}
        justifyContent='start'
        alignItems='center'
        gap='1rem'
      >
        <Avatar name='Sage Adebayo' src={avatar} shape='rounded' size='md' />
        <Text
          fontFamily={'poppins'}
          fontWeight={'400'}
          fontSize='14px'
          lineHeight='20px'
          color={'hsla(218, 17%, 35%, 1)'}
        >
          {label}
        </Text>
      </Box>
      <Box
        display={'flex'}
        width={'24px'}
        height={'24px'}
        borderRadius={'50px'}
        paddingTop={'2px'}
        paddingBottom={'2px'}
        backgroundColor='hsla(28, 100%, 50%, 1)'
        justifyContent={'center'}
        alignItems={'center'}
        gap={'10px'}
      >
        <Text
          fontFamily={'poppins'}
          fontWeight={'400'}
          fontSize='14px'
          lineHeight='20px'
          color={'hsla(204, 45%, 98%, 1)'}
        >
          {number}
        </Text>
      </Box>
    </Box>
  )
}

AssignmentsComponentLayout.propTypes = {
  /**
   * titulo del componente
   * **/
  label: PropTypes.string.isRequired,
  /**
   * url de la imagen
   * **/
  avatar: PropTypes.string.isRequired
}

export default AssignmentsComponentLayout
