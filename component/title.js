import { Text, Stack } from '@chakra-ui/react'
import React from 'react'

function Title() {
  return (
    <Stack spacing={{base:'-10px', md: '-20px', lg:'-40px'}} textColor='white' textAlign={'center'}>
        <Text fontSize={{base:'2xl',md:'3xl',lg:'4xl'}} textTransform={'uppercase'} marginBottom={'40px'}>
             Capstone Project
        </Text>
        <Text fontWeight={'black'} fontSize={{base:'4xl',md:'7xl',lg:'8xl'}} textTransform={'uppercase'} letterSpacing='2px'>
            Air Quality Advisor
        </Text>
    </Stack>
  )
}

export default Title