import { Flex, Box, Heading } from '@chakra-ui/react';
import { ReactComponent as Illustration } from '../assets/images/404-error.svg';

const NotFound = () => {
  return (
    <Flex
      as="section"
      p={{ base: 5, md: 20 }}
      pt={{ base: 100, md: 20 }}
      direction="column"
      justify="center"
      align="center"
      bgColor="gray.100"
    >
      <Box boxSize={{ base: 'xs', md: 'md' }}>
        <Illustration />
      </Box>
      <Heading as="h1" size="lg" color="blue.600" textAlign="center">
        Oops! Halaman tidak ditemukan.
      </Heading>
    </Flex>
  );
};

export default NotFound;
