import React from 'react'
import { Flex, Text, Input } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Flex alignItems={'center'} background="#2C3333" padding={4}>
      <Text fontSize={20} color={'#fff'}>
        MoviesHub
      </Text>
      <Input width={400} ml={10} placeholder="Search" color="#fff" />
    </Flex>
  )
}

export default Navbar
