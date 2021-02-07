import { Flex, Box, Image, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Navlinks from './Navlinks';
import Navbutton from './Navbutton';
import Drawer from './Drawer';

const Navbar = () => {
  const [isLaptop] = useMediaQuery('(min-width: 960px)');

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
      <Box boxSize="xs" pt={{ base: 455, lg: 260 }} mb={{ base: 500, lg: 260 }}>
        <Link to="/">
          <Image
            src="/images/index.png"
            alt="SMKN 2 Karanganyar's Logo"
            h={{ base: 10, lg: 50 }}
          />
        </Link>
      </Box>
      {!isLaptop && <Drawer />}
      {isLaptop && <Navlinks />}
      {isLaptop && <Navbutton />}
    </Flex>
  );
};

export default Navbar;
