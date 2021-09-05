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
    <Flex
      w='full'
      hMin='45rem'
      p={isLargerThan1100 ? '5rem' : '1rem'}
      pb='0rem'
      bg='rgba(237, 107, 167)'
      overflow='hidden'
    >
      <Stack
        position='relative'
        direction={isLargerThan1100 ? 'row' : 'column'}
      >
        <Stack
          justify='center'
          direction='column'
          spacing='4rem'
          w={isLargerThan1100 ? '50%' : '100%'}
        >
          <Flex
            w='full'
            mt={isLargerThan1100 ? '0rem' : '3rem'}
            justify={isLargerThan1100 ? '' : 'center'}
          >
            <Image w='7rem' src={Logo} alt='Flink' />
          </Flex>

          <Heading color='white' mb='40px' as='h1' size='3xl'>
            Groceries delivered in 10 minutes
          </Heading>
          <Text color='white' fontSize='22px'>
            No matter what you need: We deliver your groceries including fresh
            fruit and vegetables of the highest quality directly to your home.
            Within 10 minutes and at supermarket prices.
          </Text>
          <HStack
            align='stretch'
            justifyContent={isLargerThan1100 ? '' : 'center'}
            spacing='2rem'
            pb='2rem'
          >
            <Image h={['3rem', '4rem']} src={AppStore} alt='AppStore' />
            <Image h={['3rem', '4rem']} src={GoogleStore} alt='GoogleStore' />
          </HStack>
        </Stack>
        <Flex justify={isLargerThan1100 ? '' : 'center'}>
          <Image
            w='50rem'
            position={isLargerThan1100 ? 'absolute' : ''}
            right='-13rem'
            top='1.4rem'
            src={Splash}
            alt='Splash'
          />
        </Flex>
      </Stack>
    </Flex>
  )
}

export default Hero
