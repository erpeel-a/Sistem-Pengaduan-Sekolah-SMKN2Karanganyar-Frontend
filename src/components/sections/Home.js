import { useContext } from 'react';
import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  ButtonGroup,
  Button,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Home = ({ history }) => {
  const [isLaptop] = useMediaQuery('(min-width: 960px)');
  const { user } = useContext(AuthContext);
  const toast = useToast();

  const handleClick = () => {
    if (user) {
      history.push('/buat');
    } else {
      history.push('/login');
      toast({
        position: 'top',
        title: 'Silahkan Login Terlebih Dahulu!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      as="section"
      id="home"
      p={{ base: 5, md: 20 }}
      pt={{ base: 100, md: 40 }}
      bgColor="gray.100"
    >
      <Box>
        <Heading as="h1" mt={{ base: 10, md: 0 }} mb={10}>
          Selamat Datang di Sistem Layanan Pengaduan & Aspirasi SMKN 2
          Karanganyar
        </Heading>
        <Text mb={8} color="gray.600" fontSize={{ base: 'md', xl: 'lg' }}>
          Laporkan kepada kami jika ada Pengaduan atau pun Aspirasi yang dapat
          menjadi langkah awal untuk kita menjadi lebih baik lagi.
        </Text>
        <ButtonGroup
          spacing={{ base: 0, md: 4 }}
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Button
            p={6}
            fontWeight="400"
            fontSize={{ base: 'md', xl: 'lg' }}
            color="gray.600"
            colorScheme="gray"
            borderBottom="2px"
            borderColor="gray.300"
          >
            Pelajari Selengkapnya
          </Button>
          <Button
            mt={{ base: 4, md: 0 }}
            p={6}
            fontWeight="400"
            fontSize={{ base: 'md', xl: 'lg' }}
            colorScheme="blue"
            onClick={handleClick}
          >
            Buat Pengaduan <ArrowForwardIcon w={5} h={5} ml={1} />
          </Button>
        </ButtonGroup>
      </Box>
      {isLaptop && (
        <Box w="100%" my="auto">
          <Image src="/images/feature-graphic.png" />
        </Box>
      )}
    </Flex>
  );
};

export default withRouter(Home);
