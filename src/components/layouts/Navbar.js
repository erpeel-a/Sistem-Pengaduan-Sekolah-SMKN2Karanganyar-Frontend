import { Flex, Box, Image, Text, Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navs = [
    { name: 'Beranda', link: 'home' },
    { name: 'Tentang', link: 'tentang' },
    { name: 'Alur Pengaduan', link: 'alur' },
    { name: 'FAQ', link: 'faq' },
  ];

  return (
    <Flex
      px={5}
      py={10}
      h={100}
      w="100%"
      pos="fixed"
      justifyContent="space-around"
      alignItems="center"
      fontSize="lg"
      bgColor="white"
      borderBottom="1px"
      borderColor="gray.200"
      zIndex="docked"
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
          <a href={`#${nav.link}`}>{nav.name}</a>
        </Text>
      ))}
      <ButtonGroup spacing="4" colorScheme="blue">
        <Button p={6} fontSize="lg">
          Login
        </Button>
        <Button p={6} fontSize="lg">
          Buat Pengaduan
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
