import { Box, Container, SimpleGrid, Button, useDisclosure, Collapse, Grid, GridItem} from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import Title from "../component/title"
import Stats from "../component/stats"
import { Fade, Slide ,Bounce} from "react-awesome-reveal"
import {Querydb, QuerydbMA} from "../component/querydb"
import LineChart from "../component/chart"

function App() {
  const { isOpen: isState1, onOpen: onOpenState1, onClose: onCloseState1} = useDisclosure()
  const { isOpen: isState2, onOpen: onOpenState2, onClose: onCloseState2} = useDisclosure()
  const { isOpen: isState3, onOpen: onOpenState3, onClose: onCloseState3} = useDisclosure()
  let dataset=Querydb()
  let data24h=QuerydbMA()
  return (
    <Container maxW={'90%'} maxH={'100%'} px={6} pt={16} textColor='white'  pb={10}>
      <Box minH={'100px'} mb={{base: 0, md:10}}>
        <Fade>
          <Title/>
        </Fade>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 8 }} gap={{ base: '6', lg: '5' }} pb={5} >
        <Bounce cascade>
        <Stats h='400px' label={'Time'} value={dataset?.[0].at(-1)} ispu={-1} fontSize='lg'/>
        <Stats label={'Humidity'} value={dataset?.[1].at(-1)} click={function (){
          onCloseState1()
          onCloseState2()
          onCloseState3()
        }}/>
        <Stats label={'Temperature'} value={dataset?.[2].at(-1)}click={function (){
          onCloseState1()
          onCloseState2()
          onOpenState3()
        }}/>
        <Stats label={'CO'} value={dataset?.[3].at(-1)}click={function (){
          onCloseState1()
          onOpenState2()
          onCloseState3()
        }}/>
        <Stats ispu={300} click={function (){
          onCloseState1()
          onOpenState2()
          onOpenState3()
        }}/>
        <Stats ispu={200} click={function (){
          onOpenState1()
          onCloseState2()
          onCloseState3()
        }}/>
        <Stats ispu={100} click={function (){
          onOpenState1()
          onCloseState2()
          onOpenState3()
        }}/>
        <Stats ispu={400} click={function (){
          onOpenState1()
          onOpenState2()
          onCloseState3()
        }}/>
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
        border={'2px'}
        borderColor={'black'}
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
        textColor={'black'}
        justifyContent={'center'}
        alignItems={'center'}
        boxShadow={'lg'}
        minW='150px'
        minH='610px'
        border={'2px'}
        borderColor={'black'}
      >
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[1]} title='humidity' enter={!isState1&&!isState2&&!isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[2]} title='temperature' enter={!isState1&&!isState2&&isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[3]} title='co' enter={!isState1&&isState2&&!isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[1]} title='4' enter={!isState1&&isState2&&isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[1]} title='5' enter={isState1&&!isState2&&!isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[1]} title='6' enter={isState1&&!isState2&&isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[1]} title='7' enter={isState1&&isState2&&!isState3}/>
      </Box>
      </GridItem>
      </Grid>

      
    </Container>
  )
}


export default App
