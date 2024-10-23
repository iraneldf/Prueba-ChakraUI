import React from 'react'
import PropTypes from 'prop-types'
import { Card, Heading, Text } from '@chakra-ui/react'

const Title = ({ title = 'Title', subTitle = 'SubTitle' }) => {
  return (
    <Card.Header>
      <Heading
        fontFamily='poppins'
        color='hsla(244, 100%, 15%, 1)'
        fontWeight='600px'
        size='20px'
        lineHeight='30px'
      >
        {title}
      </Heading>
      <Text textStyle='sm' color={'hsla(232, 12%, 51%, 1)'}>
        {subTitle}
      </Text>
    </Card.Header>
  )
}

Title.propTypes = {
  /**
   * nombre del titulo
   * **/
  title: PropTypes.string.isRequired,
  /**
   * nombre del subtitulo
   * **/
  subTitle: PropTypes.string.isRequired
}

export default Title
