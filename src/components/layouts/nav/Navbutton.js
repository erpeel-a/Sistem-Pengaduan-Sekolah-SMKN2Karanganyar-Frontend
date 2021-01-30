import { Button, ButtonGroup } from '@chakra-ui/react';
import { withRouter } from 'react-router-dom';

const Navbutton = props => {
  console.log(props);

  return (
    <ButtonGroup
      mt={{ base: 4, lg: 0 }}
      spacing={{ base: 0, lg: 4 }}
      colorScheme="blue"
      w={{ base: '100%', lg: 'auto' }}
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Button
        mb={{ base: 4, lg: 0 }}
        p={6}
        fontSize={{ base: 'md', xl: 'lg' }}
        onClick={() => props.history.push('/login')}
      >
        Login
      </Button>
      <Button p={6} fontSize={{ base: 'md', xl: 'lg' }}>
        Buat Pengaduan
      </Button>
    </ButtonGroup>
  );
};

export default withRouter(Navbutton);
