import { Box, Text} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'

function Stats({label,value,click,ispu}) {
  const color = () => {
    if(ispu==-1){
      return '#EFEEF1'
    }else if(ispu<=50){
      return '#36D399'
    }else if(ispu<=100){
      return '#3ABFF8'
    }else if(ispu<=200){
      return '#FBBD23'
    }else if(ispu<=300){
      return '#F87272'
    }else{
      return '#1B1924'
    }
  }
  const ndcolor =()=>{
    if(ispu<=300){
      return 'black'
    }else{
      return 'white'
    }
  }
  function displaytext (){
    if(ispu==-1){
      return ' '
    }else{
      return 'ISPU Score : ' + ispu
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
      textColor={ndcolor}
      _hover={{bg:"gray.500"}}
      minW={{ base: '300px', md: '150px' ,lg: '0px'}}
      maxH='120px'
      border={'2px'}
      borderColor={ndcolor}
      minH = '120px'
    >
        <Text fontSize={'xl'} fontWeight={'bold'}>
              {label}
            </Text>
        <Text fontSize={'3xl'} fontWeight={'bold'}>
              {value}
            </Text>
            <Text fontSize={'md'} fontWeight={'bold'}>
              {displaytext()}
            </Text>
    </Box>
  )
}
Stats.propTypes={
    label:PropTypes.string,
    ispu:PropTypes.number,
}
Stats.defaultProps={
    label:'-',
    value:0,
    ispu:1,
}

export default Stats