import { useState, useContext } from 'react';
import { instance } from '../apis/axios.instance';
import {
  Box,
  Button,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AuthContext } from '../contexts/AuthContext';

const Login = ({ history }) => {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const { setUser } = useContext(AuthContext);
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    setLoad(true);
    instance
      .post('/login', { email: state.email, password: state.password })
      .then(response => {
        const { email, name, nomor_induk } = response.data.user;
        const token = response.data.token;
        setUser({ email, name, nomor_induk, token });
        setLoad(false);
        toast({
          position: 'top',
          title: 'Login Berhasil!',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        history.push('/');
      })
      .catch(() => {
        setLoad(false);
        toast({
          position: 'top',
          title: 'Email atau Password Salah!',
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      as="section"
      p={{ base: 5, md: 20 }}
      pt={{ base: 120, md: 40 }}
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      bgColor="gray.100"
    >
      <Box
        mb={{ base: 10, lg: 0 }}
        mr={{ base: 0, lg: '5%' }}
        w={{ base: '100%', lg: '55%' }}
      >
        <Heading as="h1" mb={5}>
          Tanggapan Kamu Adalah Langkah Awal Kita Untuk Maju!
        </Heading>
        <Text fontSize={{ base: 'md', xl: 'lg' }} color="gray.600">
          Laporkan kepada kami jika ada pengaduan atau pun aspirasi yang dapat
          menjadi langkah awal untuk kita menjadi lebih baik lagi.
        </Text>
      </Box>
      <Box
        p={{ base: 5, md: 10 }}
        w={{ base: '100%', lg: '40%' }}
        textAlign="center"
        bgColor="white"
        borderRadius="xl"
        boxShadow="md"
      >
        <Heading my={2} size="lg" fontWeight="400">
          Login Pengaduan
        </Heading>
        <Heading mb={6} size="lg">
          SMKN 2 Karanganyar
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Masukkan Email Kamu"
            type="email"
            value={state.email}
            onChange={e => setState({ ...state, email: e.target.value })}
            isRequired
            mb={4}
            fontSize={{ base: 'md', xl: 'lg' }}
          />
          <InputGroup>
            <Input
              placeholder="Masukkan Password Kamu"
              type={show ? 'text' : 'password'}
              value={state.password}
              onChange={e => setState({ ...state, password: e.target.value })}
              isRequired
              fontSize={{ base: 'md', xl: 'lg' }}
            />
            <InputRightElement width="3.25rem">
              <IconButton
                icon={show ? <ViewOffIcon /> : <ViewIcon />}
                h="1.8rem"
                bgColor="gray.200"
                onClick={() => setShow(!show)}
              />
            </InputRightElement>
          </InputGroup>
          <Button
            type="submit"
            colorScheme="blue"
            mt={6}
            py={6}
            w="100%"
            fontSize={{ base: 'md', xl: 'lg' }}
            isLoading={load}
          >
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
