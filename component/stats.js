import { Box, Text} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'

function Stats({label,value,click}) {
  const color = () => {
    if(value<60){
      return 'red'
    }else{
      return 'white'
    }
  }
  return (
    <Box 
      onClick={click}
      px={{ base: '5', md: '5' }}
      py={{ base: '5', md: '3' }}
      maxW={{ base: '300px', md: '100%' ,lg:'300px'}}
      bg={color}
      borderRadius="20"
      boxShadow={'lg'}
      textColor={'black'}
      _hover={{bg:"gray.200"}}
      minW={{ base: '300px', md: '150px' ,lg: '0px'}}
      maxH='120px'
    >
        <Text fontSize={'xl'} >
              {label}
            </Text>
        <Text fontSize={'3xl'} fontWeight={'bold'}>
              {value}
            </Text>
    </Box>
  )
}
Stats.propTypes={
    label:PropTypes.string,
}
Stats.defaultProps={
    label:'-',
    value:0,
}

export default Stats