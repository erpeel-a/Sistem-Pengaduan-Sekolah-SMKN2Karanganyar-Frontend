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
    <Flex p={20} pt={40} bgColor="gray.50" id="home">
      <Box>
        <Heading mb={10}>
          Selamat Datang di Sistem Layanan Pengaduan & Aspirasi SMKN 2
          Karanganyar
        </Heading>
        <Text mb={8} color="gray.600">
          Laporkan kepada kami jika ada Pengaduan atau pun Aspirasi yang dapat
          menjadi langkah awal untuk kita menjadi lebih baik lagi.
        </Text>
        <ButtonGroup>
          <Button fontWeight="400" colorScheme="blue">
            Buat Pengaduan <ArrowForwardIcon w={5} h={5} ml={1} />
          </Button>
          <Button fontWeight="400" colorScheme="gray">
            Pelajari Selengkapnya
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
