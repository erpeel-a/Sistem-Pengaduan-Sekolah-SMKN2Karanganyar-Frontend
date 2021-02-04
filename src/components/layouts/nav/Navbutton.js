import { Button, ButtonGroup, useToast } from '@chakra-ui/react';
import { withRouter } from 'react-router-dom';

const Navbutton = ({ user, clearUser, history }) => {
  const toast = useToast();

  const handleSearchButton = () => {
    if (user) {
      history.push('/search');
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

  const handleClick = () => {
    if (user) {
      history.push('/');
      clearUser();
    } else {
      history.push('/login');
    }
  };

  return (
    <ButtonGroup
      mt={{ base: 4, lg: 0 }}
      spacing={{ base: 0, lg: 4 }}
      w={{ base: '100%', lg: 'auto' }}
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Button
        mb={{ base: 4, lg: 0 }}
        p={6}
        fontSize={{ base: 'md', xl: 'lg' }}
        colorScheme="blue"
        onClick={handleSearchButton}
      >
        Cari Pengaduan
      </Button>
      <Button
        p={6}
        fontSize={{ base: 'md', xl: 'lg' }}
        colorScheme={user ? 'red' : 'blue'}
        onClick={handleClick}
      >
        {!user ? 'Login' : 'Logout'}
      </Button>
    </ButtonGroup>
  );
};

export default withRouter(Navbutton);
