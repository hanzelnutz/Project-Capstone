import { Box, Text} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'


function Clock() {
  const date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  console.log(date.getHours());
  return (
    h + " : " + m + " : " + s
  );
}

function Stats({label,value,click,ispu}) {
  const color = () => {
    if(ispu==-1){
      if (label = 'Humidity (%)' && (value>=40 && value<=60)){
        return '#74D672'
      }
      else if (label = 'Temperature (°C)' && (value>=18 && value<=28)){
        return '#74D672'
      }
      else {
        return '#F5F590'
      }
    }else if(ispu<=50){
      return '#74D672'
    }else if(ispu<=100){
      return '#72D2FF'
    }else if(ispu<=200){
      return '#F5F590'
    }else if(ispu<=300){
      return '#F7675F'
    }
    else{
      return '#000000'
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