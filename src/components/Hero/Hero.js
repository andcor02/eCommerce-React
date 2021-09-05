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
  useMediaQuery,
} from '@chakra-ui/react'
import * as React from 'react'
import Logo from '../logo.png'
import AppStore from '../appStore.png'
import GoogleStore from '../googleStore.png'
import Splash from '../DES_1135_DE-eng-01.png'

const Hero = () => {
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)')
  return (
    <Box
      w='full'
      hMin='45rem'
      pt='5rem'

      pr='5rem'
      pl='5rem'
      bg='rgba(237, 107, 167)'
      overflow='hidden'
    >
      <Stack
        position='relative'
        direction={isLargerThan1100 ? 'row' : 'column'}
      >
        <Stack
          direction='column'
          spacing='4rem'
          w={isLargerThan1100 ? '50%' : '100%'}
        >
          <Image w='7rem' src={Logo} alt='Flink' />
          <Heading color='white' mb='40px' as='h1' size='3xl'>
            Groceries delivered in 10 minutes
          </Heading>
          <Text color='white' fontSize='22px'>
            No matter what you need: We deliver your groceries including fresh
            fruit and vegetables of the highest quality directly to your home.
            Within 10 minutes and at supermarket prices.
          </Text>
          <HStack align='stretch' spacing='2rem' pb='2rem'>
            <Image w='14rem' src={AppStore} alt='AppStore' />
            <Image w='14rem' src={GoogleStore} alt='GoogleStore' />
          </HStack>
        </Stack>

        <Image
          w='50rem'
          position={isLargerThan1100 ? 'absolute' : ''}
          right='-13rem'
          top='1.4rem'
          src={Splash}
          alt='Splash'
        />
      </Stack>
    </Box>
  )
}

export default Hero
