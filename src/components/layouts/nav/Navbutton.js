import { useState, useContext } from 'react';
import { Button, ButtonGroup, useToast } from '@chakra-ui/react';
import { withRouter } from 'react-router-dom';
import { instance } from '../../../apis/axios.instance';
import { AuthContext } from '../../../contexts/AuthContext';

const Navbutton = ({ history }) => {
  const { user } = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const toast = useToast();

  const handleSearchButton = () => {
    if (user) {
      history.push('/pengaduan');
    } else {
      history.push('/login');
      toast({
        position: 'top',
        title: 'Silahkan Login Terlebih Dahulu!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const handleClick = () => {
    if (user) {
      setLoad(true);
      instance
        .post('/logout', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then(response => {
          console.log(response);
          toast({
            position: 'top',
            title: 'Logout Berhasil!',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
          sessionStorage.removeItem('user');
          history.push('/');
          setTimeout(() => {
            setLoad(false);
            window.location.reload();
          }, 2000);
        })
        .catch(error => console.log(error));
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
        isLoading={load}
      >
        {!user ? 'Login' : 'Logout'}
      </Button>
    </ButtonGroup>
  );
};

export default withRouter(Navbutton);
