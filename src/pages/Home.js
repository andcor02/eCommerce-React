import React, { useState } from 'react'
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Spacer,
  Image,
  useMediaQuery,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Hero from '.././components/Hero/Hero'
import Footer from '.././components/Footer/Footer'
import data from '.././data/cities.json'

const Home = () => {
  const { cities } = data
  const [selectedCity, setSelectedCity] = useState(cities[0])
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)')
  return (
    <>
      <Hero />
      <SimpleGrid
        columns={isLargerThan1100 ? '2' : '0'}
        rows={isLargerThan1100 ? '0' : '2'}
        p={isLargerThan1100 ? '5rem' : '1rem'}
        spacing={isLargerThan1100 ? '20' : '5'}
      >
        <Box>
          <Heading w='full' as='h2' mb='5' size='xl'>
            Explore our cities
          </Heading>
          <SimpleGrid columns='2'>
            {cities.map((items) => {
              return (
                <Button
                  background={items === selectedCity ? 'gray.100' : ''}
                  overflow='scroll'
                  variant='outline'
                  mx={isLargerThan1100 ? '5' : '1'}
                  my={isLargerThan1100 ? '2' : '1'}
                  onClick={() => setSelectedCity(items)}
                >
                  <Text mx='0'>{items.name}</Text>
                  <Spacer />
                  <ChevronRightIcon />
                </Button>
              )
            })}
          </SimpleGrid>
        </Box>
        <Box>
          <Flex mt={isLargerThan1100 ? '5rem' : '0'} justify='center'>
            <Image src={selectedCity.url} alt='Map' />
          </Flex>
        </Box>
        <Flex p='1rem'>
          <Text fontSize='lg'>City not listed?&nbsp;</Text>
          <Link
            href='https://goflink.typeform.com/to/LWOemigw'
            fontSize='lg'
            color='rgba(237, 107, 167)'
            fontWeight='bold'
          >
            Signup for our waitlist
          </Link>
        </Flex>
      </SimpleGrid>
      <Footer />
    </>
  )
}

export default Home
