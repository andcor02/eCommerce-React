import {
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Text,
  Heading,
  HStack,
  Stack,
} from '@chakra-ui/react'
import * as React from 'react'
import Logo from '../logo.png'
import AppStore from '../appStore.png'
import GoogleStore from '../googleStore.png'
import Splash from '../DES_1135_DE-eng-01.png'

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
      overflow='hidden'
    >
      <Stack position='relative' direction='row' >
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
            <Image w='14rem' src={AppStore} alt='AppStore' />
            <Image w='14rem' src={GoogleStore} alt='GoogleStore' />
          </HStack>
        </Box>
        <Image w='50rem' position='absolute' right='-13rem' top='1.4rem' src={Splash} alt='Splash' />
      </Stack>
    </Box>
  )
}

export default Hero
