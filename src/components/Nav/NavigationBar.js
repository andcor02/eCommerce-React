import {
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Text
} from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'
import Logo from './flinkLogo.png'

const NavigationBar = () => (
  <Box minHeight='480px'>
    <Box
      as='header'
      height='16'
      bg={useColorModeValue('rgb(42,76,178)', 'gray.800')}
      position='relative'
    >
      <Box
        height='100%'
        maxW='7xl'
        mx='auto'
        ps={{
          base: '6',
          md: '8',
        }}
        pe={{
          base: '5',
          md: '0',
        }}
      >
        <Flex
          w='full'
          as='nav'
          aria-label='Site navigation'
          align='center'
          justify='space-between'
          height='100%'
        >
          <Box as='a' href='#' rel='home'>
            <VisuallyHidden>Flink</VisuallyHidden>
            <Text color='white'>Ride with us! Apply now as a driver</Text>
            {/* <Image w='8rem' src={Logo} alt='Flink' /> */}
          </Box>
          <NavContent.Desktop
            display={{
              base: 'none',
              md: 'flex',
            }}
          />
          <NavContent.Mobile
            display={{
              base: 'flex',
              md: 'none',
            }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
)

export default NavigationBar
