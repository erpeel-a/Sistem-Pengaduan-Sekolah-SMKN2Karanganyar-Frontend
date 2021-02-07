import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      as="section"
      id="tentang"
      px={{ base: 5, md: 20, lg: 40 }}
      py={10}
      flexDir="column"
      alignItems="center"
    >
      <Heading color="blue.600" mb={4} textAlign="center">
        Untuk Apa Sistem Ini Dibuat ?
      </Heading>
      <Box
        bgColor="gray.100"
        py={5}
        px={{ base: 5, md: 10 }}
        borderRadius="xl"
        boxShadow="md"
      >
        <Text
          fontSize={{ base: 'md', xl: 'lg' }}
          lineHeight={7}
          textAlign="center"
        >
          <Text fontWeight="600">
            Sistem Layanan Pengaduan & Aspirasi SMKN 2 Karanganyar
          </Text>{' '}
          ini dibuat untuk menampung pengaduan & aspirasi dari semua warga SMKN
          2 Karanganyar. Diharapkan dengan sistem ini semua warga sekolah dapat
          lebih mudah untuk melaporkan pengaduan & aspirasi untuk sekolah.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
