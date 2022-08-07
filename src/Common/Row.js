import React from 'react'
import {Flex,Text} from '@chakra-ui/react'
const Row = ({ label, value }) => {
  return (
    <Flex alignItems="center">
      <Text mr={2} fontWeight="bold">
        {label} :
      </Text>
      <Text>{value}</Text>
    </Flex>
  )
}

export default Row
