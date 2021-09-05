import {
  Flex,
  Text,
  HStack,
  VStack,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'
import * as React from 'react'

const Footer = () => {
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)')
  return (
    <Flex
      px='5rem'
      py='2rem'
      w='full'
      justify='center'
      bg='rgba(237, 107, 167)'
      overflow='hidden'
    >
      <VStack w='full' spacing='2rem'>
        <HStack color='white' spacing={isLargerThan1100 ? '5rem' : '1rem'}>
          <Link href='https://www.goflink.com/en-DE/imprint/'>Imprint</Link>
          <Link href='https://www.goflink.com/en-DE/privacy/'>Privacy</Link>
          <Link href='https://www.goflink.com/en-DE/agb/'>Conditions</Link>
          <Link href='https://careers.smartrecruiters.com/Flink3/joinus'>
            Careers
          </Link>
          <Link href='https://www.goflink.com/en-DE/faq/'>FAQ</Link>
        </HStack>

        <Link color='white' href='https://www.goflink.com/de-DE/'>
          Flink Germany
        </Link>
        <hr style={{ color: 'gray', width: '100%' }} />
        <Text color='white'>© 2021 Flink SE</Text>
      </VStack>
    </Flex>
  )
}

export default Footer
