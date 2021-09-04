import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import NavigationBar from './components/Nav/NavigationBar'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavigationBar />
      <Hero />
    </ChakraProvider>
  )
}

export default App
