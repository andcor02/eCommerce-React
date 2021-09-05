import React, { useState } from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Heading,
  Button,
  Stack,
  HStack,
  Image,
  useMediaQuery,
  theme,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Hero from '.././components/Hero/Hero'
import data from '.././data/cities.json'

const Home = () => {
  const { cities } = data
  const [selectedCity, setSelectedCity] = useState(cities[0])
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)')
  return (
    <>
      <Hero />
      <Stack direction='column' p='5rem'>
        <Heading w='full' as='h2' size='xl' mb='2rem'>
          Explore our cities
        </Heading>
        <Image w='40rem' src={selectedCity.url} alt='Map' />
        {cities.map((items) => {
          return (
            <Button
              size='lg'
              variant='outline'
              mx='2'
              my='2'
              onClick={() => setSelectedCity(items)}
              w='20rem'
            >
              <Text left='4'>{items.name}</Text>
              <ChevronRightIcon right='4' />
            </Button>
          )
        })}

        <Flex mx='2' mt='4'>
          <Text fontSize='lg'>City not listed?&nbsp;</Text>
          <Text fontSize='lg' color='rgba(237, 107, 167)' fontWeight='bold'>
            Signup for our waitlist
          </Text>
        </Flex>
      </Stack>
    </>
  )
}

export default Home
