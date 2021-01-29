import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Home = () => {
  return (
    <Flex p={20} pt={40} bgColor="gray.100" id="home">
      <Box>
        <Heading as="h1" mb={10}>
          Selamat Datang di Sistem Layanan Pengaduan & Aspirasi SMKN 2
          Karanganyar
        </Heading>
        <Text mb={8} color="gray.600" fontSize="lg">
          Laporkan kepada kami jika ada Pengaduan atau pun Aspirasi yang dapat
          menjadi langkah awal untuk kita menjadi lebih baik lagi.
        </Text>
        <ButtonGroup spacing={4}>
          <Button
            p={6}
            fontWeight="400"
            fontSize="lg"
            color="gray.600"
            colorScheme="gray"
            borderBottom="2px"
            borderColor="gray.300"
          >
            Pelajari Selengkapnya
          </Button>
          <Button p={6} fontWeight="400" colorScheme="blue" fontSize="lg">
            Buat Pengaduan <ArrowForwardIcon w={5} h={5} ml={1} />
          </Button>
        </ButtonGroup>
      </Box>
      <Box w="100%">
        <Image src="/images/feature-graphic.png" />
      </Box>
    </Flex>
  );
};

export default Home;
