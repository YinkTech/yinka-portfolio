import { Box, Button, Text, Container, Divider, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1'>
        Not Found
      </Heading>
      <Text>
        The page you&apos;re looking from was not found.
      </Text>
      <Divider my={6} />
      <Box my={6} align='center'>
        <NextLink href='/'>
          <Button colorScheme='teal'>
            Return Home
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound