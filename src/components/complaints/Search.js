import { Box, Button, Heading, VStack } from '@chakra-ui/react';

import CustomInput from '../layouts/CustomInput';
import Result from './Result';

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Pencarian Berhasil!');
  };

  return (
    <Box pt={40} pb={5} px={{ base: 5, md: 20 }} bgColor="gray.100">
      <form onSubmit={handleSubmit}>
        <VStack
          px={{ base: 5, md: 10 }}
          bgColor="white"
          borderRadius="xl"
          boxShadow="md"
        >
          <Heading as="h1" size="lg" mt={10} mb={5} textAlign="center">
            Cari Pengaduan / Aspirasi
          </Heading>
          <CustomInput
            label="Pencarian Berdasarkan Judul atau Masalah"
            type="text"
            required
          />
          <Button
            type="submit"
            colorScheme="blue"
            my={5}
            py={7}
            w="100%"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            Cari
          </Button>
        </VStack>
        <VStack
          my={5}
          py={10}
          px={{ base: 5, md: 10 }}
          bgColor="white"
          borderRadius="xl"
          boxShadow="md"
          spacing={5}
        >
          <Result />
        </VStack>
      </form>
    </Box>
  );
};

export default Search;
