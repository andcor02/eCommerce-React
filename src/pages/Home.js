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
        <Stack direction='column'>
          <Box>
            <Heading>Explore our cities</Heading>
            <Stack>
              {cities.map((items) => {
                return (
                  <Button onClick={() => setSelectedCity(items)} minW='10rem'>
                    <Text position='absolute' left='4'>
                      {items.name}
                    </Text>
                    <ChevronRightIcon position='absolute' right='4' />
                  </Button>
                )
              })}
            </Stack>
          </Box>
          <Box>
            <Image
              w='25rem'
              position='absolute'
              src={selectedCity.url}
              alt='Map'
            />
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Home
