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
  theme,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Hero from '.././components/Hero/Hero'
import data from '.././data/cities.json'

const Home = () => {
  const { cities } = data
  const [selectedCity, setSelectedCity] = useState(cities[0])
  return (
    <>
      <Hero />
      <Box p='5rem'>
        <Heading as='h2' size='xl' mb='2rem'>
          Explore our cities
        </Heading>
        <Stack direction='row'>
          <Box w='50%'>
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
          </Box>
          <Box>
            <Image w='40rem' src={selectedCity.url} alt='Map' />
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Home
