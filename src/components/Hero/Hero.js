import {
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Text,
  Heading,
  HStack
} from '@chakra-ui/react'
import * as React from 'react'
import Logo from '../logo.png'
import AppStore from '../appStore.png'
import GoogleStore from '../googleStore.png'

const Hero = () => {
  return (
    <Box
      w='full'
      h='45rem'
      pt='5rem'
      pb='2rem'
      pr='5rem'
      pl='5rem'
      bg='rgba(237, 107, 167)'
    >
      <Box>
        <Box w='50%'>
          <Image mb='80px' w='7rem' src={Logo} alt='Flink' />
          <Heading color='white' mb='40px' as='h1' size='3xl'>
            Groceries delivered in 10 minutes
          </Heading>
          <Text color='white' fontSize='22px'>
            No matter what you need: We deliver your groceries including fresh
            fruit and vegetables of the highest quality directly to your home.
            Within 10 minutes and at supermarket prices.
          </Text>
          <HStack mt='80px' align='stretch' spacing='2rem'>
            <Image w='15rem' src={AppStore} alt='AppStore' />
            <Image w='15rem' src={GoogleStore} alt='GoogleStore' />
          </HStack>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
