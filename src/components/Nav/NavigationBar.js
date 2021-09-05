import {
  Box,
  Flex,
  useColorModeValue,
  Spacer,
  Link,
  Button,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'

const NavigationBar = () => (
  <Box>
    <Box
      as='header'
      height='20'
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
          <Flex w='full' align='center'>
            <Text color='white'>Ride with us! Apply now as a driver</Text>
            <Spacer />
            <Button size='lg' mx='5' rounded='20'>
              <Link href='https://riders.goflink.com/join/?utm_source=internaltransfer'>
                Apply
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  </Box>
)

export default NavigationBar
