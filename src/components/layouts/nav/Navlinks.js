import { Flex, Text } from '@chakra-ui/react';

const Navlinks = () => {
  const navs = [
    { name: 'Beranda', link: 'home' },
    { name: 'Tentang', link: 'tentang' },
    { name: 'Alur Pengaduan', link: 'alur' },
    { name: 'FAQ', link: 'faq' },
  ];

  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent="space-around"
      w={{ base: '100%', lg: '35%' }}
    >
      {navs.map((nav, i) => (
        <Text
          my={{ base: 4, lg: 0 }}
          fontWeight="600"
          fontSize={{ base: 'md', xl: 'lg' }}
          _hover={{ color: 'blue.600', transition: '0.2s ease-in-out' }}
          key={i}
        >
          <a href={`#${nav.link}`}>{nav.name}</a>
        </Text>
      ))}
    </Flex>
  );
};

export default Navlinks;
