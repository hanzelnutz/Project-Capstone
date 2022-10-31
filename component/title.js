import { Text, Stack } from '@chakra-ui/react'
import React from 'react'

function Title() {
  return (
    <Stack spacing={{base:'-10px', md: '-20px', lg:'-40px'}} textColor='white' textAlign={'center'}>
        <Text fontSize={{base:'3xl',md:'5xl',lg:'6xl'}} textTransform={'uppercase'}>
             Welcome to
        </Text>
        <Text fontWeight={'black'} fontSize={{base:'4xl',md:'7xl',lg:'8xl'}} textTransform={'uppercase'} letterSpacing='2px'>
            Our project
        </Text>
    </Stack>
  )
}

export default Title