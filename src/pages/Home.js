import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Stack,
  theme,
} from '@chakra-ui/react'
import Hero from './components/Hero/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      <Box p='5rem'>
        <Stack direction='column'>
          <Heading>Explore our cities</Heading>
        </Stack>
      </Box>
    </>
  )
}

export default Home
