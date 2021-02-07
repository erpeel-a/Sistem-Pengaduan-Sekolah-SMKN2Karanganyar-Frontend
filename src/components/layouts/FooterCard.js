import { Alert, AlertIcon, Box, Button, Flex } from '@chakra-ui/react';
import { checkAlert, checkStatus } from '../../utils/Check';

const FooterCard = ({ children, history, complaint, push, buttonTitle }) => {
  return (
    <Flex mt={2} align="center" direction={{ base: 'column', md: 'row' }}>
      <Box
        boxShadow="inner"
        p={2}
        w={{ base: '100%', md: '45%', lg: '30%', xl: '20%' }}
        borderRadius="lg"
      >
        {children}
      </Box>
      <Alert
        status={checkStatus(complaint.status)}
        variant="left-accent"
        mt={{ base: 2, md: 0 }}
        ml={{ base: 0, md: 4 }}
        h={10}
        borderRadius="lg"
      >
        <AlertIcon />
        {checkAlert(complaint.status)}
      </Alert>
      <Button
        colorScheme="blue"
        mt={{ base: 2, md: 0 }}
        ml={{ base: 0, md: 4 }}
        w={{ base: '100%', md: '30%' }}
        onClick={() => history.push(push)}
      >
        {buttonTitle}
      </Button>
    </Flex>
  );
};

export default FooterCard;
