import { Flex, Box, Image, Text, Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navs = ['Beranda', 'Tentang', 'Alur Pengaduan', 'FAQ'];

  return (
    <Flex
      px={5}
      py={10}
      h={100}
      w="100%"
      pos="fixed"
      justifyContent="space-around"
      alignItems="center"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Box boxSize="xs" mt={260}>
        <Link to="/">
          <Image src="/images/index.png" alt="SMKN 2 Karanganyar's Logo" h="" />
        </Link>
      </Box>
      {navs.map((nav, i) => (
        <Text
          fontWeight="600"
          _hover={{ color: 'blue.600', transition: '0.2s ease-in-out' }}
          key={i}
        >
          <Link to="/">{nav}</Link>
        </Text>
      ))}
      <ButtonGroup spacing="4" colorScheme="blue">
        <Button>Login</Button>
        <Button>Buat Pengaduan</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
