import { useContext } from 'react';
import { Flex, Box, Image, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import Navlinks from './Navlinks';
import Navbutton from './Navbutton';
import Drawer from './Drawer';

const Navbar = () => {
  const [isLaptop] = useMediaQuery('(min-width: 960px)');
  const { user, clearUser } = useContext(AuthContext);

  return (
    <Flex
      as="nav"
      px={{ base: 5, md: 20, lg: 5 }}
      py={10}
      h={100}
      w="100%"
      pos="fixed"
      justifyContent={{ base: 'space-between', lg: 'space-around' }}
      alignItems="center"
      fontSize="lg"
      bgColor="white"
      borderBottom="1px"
      borderColor="gray.200"
      boxShadow="sm"
      zIndex="docked"
    >
      <Box boxSize="xs" mt={{ base: 280, lg: 260 }}>
        <Link to="/">
          <Image
            src="/images/index.png"
            alt="SMKN 2 Karanganyar's Logo"
            h={{ base: 10, lg: 50 }}
          />
        </Link>
      </Box>
      {!isLaptop && <Drawer user={user} clearUser={clearUser} />}
      {isLaptop && <Navlinks />}
      {isLaptop && <Navbutton user={user} clearUser={clearUser} />}
    </Flex>
  );
};

export default Navbar;
