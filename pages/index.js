import { Box, Container, SimpleGrid, Button, useDisclosure, Collapse, Grid, GridItem} from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import Title from "../component/title"
import Stats from "../component/stats"
import { Fade, Slide ,Bounce} from "react-awesome-reveal"
import Querydb from "../component/querydb"
import LineChart from "../component/chart"

function App() {
  const { isOpen: isState1, onOpen: onOpenState1, onClose: onCloseState1} = useDisclosure()
  const { isOpen: isState2, onOpen: onOpenState2, onClose: onCloseState2} = useDisclosure()
  let dataset=Querydb()
  return (
    <Container maxW={'90%'} maxH={'100%'} px={6} pt={16} textColor='white'  pb={10}>
      <Box minH={'100px'} mb={{base: 0, md:10}}>
        <Fade>
          <Title/>
        </Fade>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 8 }} gap={{ base: '6', lg: '5' }} pb={5} >
        <Bounce cascade>
        <Stats h='400px' label={'Time'} value={dataset?.[0].at(-1)} fontSize='lg'/>
        <Stats label={'Humidity'} value={dataset?.[1].at(-1)} click={function (){
          onCloseState1()
          onCloseState2()
        }}/>
        <Stats label={'Temperature'} value={dataset?.[2].at(-1)}click={function (){
          onCloseState1()
          onOpenState2()
        }}/>
        <Stats label={'CO'} value={dataset?.[3].at(-1)}click={function (){
          onOpenState1()
          onOpenState2()
        }}/>
        <Stats/>
        <Stats/>
        <Stats/>
        <Stats/>
        </Bounce>
      </SimpleGrid>
      <Grid templateColumns={{base: 'repeat(1, 1fr)',md:'repeat(10, 1fr)'}} gap={4}>
      <GridItem colSpan={{base:'auto',md:3}}><Box
        px={{ base: '5', md: '6' }}
        py={{ base: '5', md: '6' }}
        maxW={{ base: '300px', md: '100%' }}
        bg="bg-surface"
        borderRadius="20"
        bgColor={'white'}
        textAlign='center'
        justifyContent={'center'}
        alignItems={'center'}
        boxShadow={'lg'}
        minW='150px'
        minH='610px'
      /></GridItem>
      <GridItem colSpan={{base:'auto',md:7}}>
      <Box
        px={{ base: '5', md: '6' }}
        py={{ base: '5', md: '6' }}
        maxW={{ base: '300px', md: '100%' }}
        bg="bg-surface"
        borderRadius="20"
        bgColor={'white'}
        textAlign='center'
        justifyContent={'center'}
        alignItems={'center'}
        boxShadow={'lg'}
        minW='150px'
        minH='610px'
      >
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[1]} title='humidity' enter={!isState1&&!isState2}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[2]} title='temperature' enter={!isState1&&isState2}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[3]} title='co' enter={isState1&&isState2}/>
      </Box>
      </GridItem>
      </Grid>

      
    </Container>
  )
}


export default App
