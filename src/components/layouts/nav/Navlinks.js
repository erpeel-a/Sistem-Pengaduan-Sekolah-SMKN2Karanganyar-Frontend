import { Link, withRouter } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

const Navlinks = ({ history }) => {
  const location = history.location.pathname;
  const navs = [
    { name: 'Beranda', link: 'home' },
    { name: 'Tentang', link: 'tentang' },
    { name: 'Alur Pengaduan', link: 'alur' },
    { name: 'FAQ', link: 'faq' },
  ];

  let links = navs.map((nav, i) => (
    <Text
      my={{ base: 4, lg: 0 }}
      fontWeight="600"
      fontSize={{ base: 'md', xl: 'lg' }}
      _hover={{ color: 'blue.600', transition: '0.2s ease-in-out' }}
      key={i}
    >
      <Link to={'/'}>{nav.name}</Link>
    </Text>
  ));

  if (location === '/') {
    links = navs.map((nav, i) => (
      <Text
        my={{ base: 4, lg: 0 }}
        fontWeight="600"
        fontSize={{ base: 'md', xl: 'lg' }}
        _hover={{ color: 'blue.600', transition: '0.2s ease-in-out' }}
        key={i}
      >
        <a href={`#${nav.link}`}>{nav.name}</a>
      </Text>
    ));
  }

  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent="space-around"
      w={{ base: '100%', lg: '35%' }}
    >
      {links}
    </Flex>
  );
};

export default withRouter(Navlinks);
