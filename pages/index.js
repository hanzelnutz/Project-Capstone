import { Text, Box, Container, SimpleGrid, Button, useDisclosure, Collapse, Grid, GridItem, Img} from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import Title from "../component/title"
import Stats from "../component/stats"
import { Fade, Slide ,Bounce} from "react-awesome-reveal"
import {Querydb, QuerydbMA} from "../component/querydb"
import LineChart from "../component/chart"
import {getCOISPU, getPM25ISPU, getPM10ISPU, getO3ISPU, getCHISPU, getNO2ISPU} from "../component/ispu"
import Clock from "../component/clock"
import {AdvicePM, AdviceCH, AdviceCO, AdviceO3, AdviceNO2, AdviceSuhu, AdviceHumid} from "../component/advice"



function App() {
  const { isOpen: isState1, onOpen: onOpenState1, onClose: onCloseState1} = useDisclosure()
  const { isOpen: isState2, onOpen: onOpenState2, onClose: onCloseState2} = useDisclosure()
  const { isOpen: isState3, onOpen: onOpenState3, onClose: onCloseState3} = useDisclosure()
  let dataset=Querydb()
  let data24h=QuerydbMA()
  let ispuCO = parseInt(data24h?.[0])
  let ispuCH = parseInt(data24h?.[1])
  let ispuNO2 = parseInt(data24h?.[2])
  let ispuPM25 = parseInt(data24h?.[3])
  let ispuPM10 = parseInt(data24h?.[4])
  let ispuO3 = parseInt(data24h?.[5])
  console.log(ispuCH, getCHISPU(ispuCH))
  return (
    <Container maxW={'90%'} maxH={'100%'} px={6} pt={16} textColor="black"  pb={10}>
      <Box minH={'100px'} mb={{base: 0, md:10}}>
        <Fade>
          <Title/>
        </Fade>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 8 }} gap={{ base: '6', lg: '5' }} pb={5} >
        <Bounce cascade>
        {/* <Stats h='400px' label={'Time'} value={dataset?.[0].at(-1)} ispu={-1} fontSize='lg'/> */}
        <Stats label={'Humidity (%)'} value={dataset?.[1].at(-1)}  ispu={-1} click={function (){
          onCloseState1()
          onCloseState2()
          onCloseState3()
        }}/>
        <Stats label={'Temperature (°C)'} value={dataset?.[2].at(-1)} ispu={-1} click={function (){
          onCloseState1()
          onCloseState2()
          onOpenState3()
        }}/>
        <Stats label={'CO (µg/m3)'} value={dataset?.[3].at(-1)} ispu={parseInt(getCOISPU(ispuCO))}click={function (){
          onCloseState1()
          onOpenState2()
          onCloseState3()
        }}/>
        <Stats label={'CH (µg/m3)'} value={dataset?.[4].at(-1)}ispu={parseInt(getCHISPU(ispuCH))} click={function (){
          onCloseState1()
          onOpenState2()
          onOpenState3()
        }}/>
        
        <Stats label={'NO2 (µg/m3)'} value={dataset?.[5].at(-1)}ispu={parseInt(getNO2ISPU(ispuNO2))} click={function (){
          onOpenState1()
          onCloseState2()
          onCloseState3()
        }}/>
        <Stats label={'PM25 (µg/m3)'} value={dataset?.[6].at(-1)}ispu={parseInt(getPM25ISPU(ispuPM25))} click={function (){
          onOpenState1()
          onCloseState2()
          onOpenState3()
        }}/>
        <Stats label={"PM10 (µg/m3)" } value={dataset?.[7].at(-1)} ispu={parseInt(getPM10ISPU(ispuPM10))} click={function (){
          onOpenState1()
          onOpenState2()
          onCloseState3()
        }}/>
         <Stats label={'O3 (µg/m3)'} value={dataset?.[8].at(-1)} ispu={parseInt(getO3ISPU(ispuO3))} click={function (){
          onOpenState1()
          onOpenState2()
          onOpenState3()
        }}/>
        </Bounce>
      </SimpleGrid>
      <Grid templateColumns={{base: 'repeat(1, 1fr)',md:'repeat(10, 1fr)'}} gap={4}>
      <GridItem colSpan={{base:'auto',md:3}}>
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
        border={'2px'}
        borderColor={'black'}
      >
        <Grid
          templateRows='repeat(10, auto)'
          templateColumns='repeat(10, auto)'
          gap={1}
        >
        <GridItem rowStart={1}colStart={1} colEnd={2}>
        <Img sizes='60px'  src='https://www.svgrepo.com/show/123881/quotation-mark.svg'  crop/>
        </GridItem>
        <GridItem colStart={2} colSpan={8} rowStart={2}rowSpan={8} alignContent={'center'} justifyItems={'center'}>
        <Text textAlign={'justify'} fontSize={'md'} fontWeight={'bold'}>
        <checkAll ispuPM25={getPM25ISPU(ispuPM25)} ispuPM10={getPM10ISPU(ispuPM10)} ispuCO={getCOISPU(ispuCO)} ispuO3={getO3ISPU(ispuO3)} ispuNO2={getNO2ISPU(ispuNO2)} ispuCH={getCHISPU(ispuCH)}/>
        <AdviceCH ispu={getCHISPU(ispuCH)}/>
        <AdviceCO ispu={getCOISPU(ispuCO)}/>
        <AdvicePM ispu10={getPM10ISPU(ispuPM10)} ispu25={getPM25ISPU(ispuPM25)}/>
        <AdviceO3 ispu={getO3ISPU(ispuO3)}/>
        <AdviceNO2 ispu={getNO2ISPU(ispuNO2)}/>
        <AdviceSuhu temp={dataset?.[2].at(-1)}/>
        <AdviceHumid humid={dataset?.[1].at(-1)}/>
        </Text>
        </GridItem>
        <GridItem rowStart={10}colStart={10} colEnd={11}>
        <Img sizes='60px'  src='https://www.svgrepo.com/show/123881/quotation-mark.svg' transform="rotate(180deg)"/>
        </GridItem>
        </Grid>
      </Box>
      </GridItem>
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
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[1]} color={'#0a9396'} title='Humidity' enter={!isState1&&!isState2&&!isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[2]} color={'#ee9b00'} title='Temperature' enter={!isState1&&!isState2&&isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[3]} color={'#52b788'} title='CO' enter={!isState1&&isState2&&!isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[4]} color={'#d62828'} title='CH' enter={!isState1&&isState2&&isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[5]} color={'#ffc300'} title='NO2' enter={isState1&&!isState2&&!isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[6]} color={'#6a4c93'} title='PM25' enter={isState1&&!isState2&&isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[7]} color={'#43291f'} title='PM10' enter={isState1&&isState2&&!isState3}/>
        <LineChart ylabel={dataset?.[0]} xlabel={dataset?.[8]} color={'#d62727'} title='O3' enter={isState1&&isState2&&isState3}/>

      </Box>
      </GridItem>
      </Grid>

      
    </Container>
  )
}


export default App
