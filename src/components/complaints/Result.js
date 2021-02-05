import { withRouter } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react';
import { checkAlert, checkStatus } from '../layouts/Check';

const Result = ({ history, complaints }) => {
  return (
    <>
      {complaints?.data?.map(complaint => (
        <Box
          key={complaint.id}
          py={5}
          px={{ base: 5, md: 10 }}
          w="100%"
          bgColor="gray.100"
          borderRadius="xl"
          borderBottom="2px"
          borderBottomColor="blue.600"
        >
          <Heading as="h2" size="md">
            {complaint.judul_laporan}
          </Heading>
          <Text fontWeight="600">Nama Pelapor : {complaint.nama}</Text>
          <Text isTruncated>{complaint.laporan}</Text>
          <Flex mt={2} align="center" direction={{ base: 'column', md: 'row' }}>
            <Alert
              status={checkStatus(complaint.status)}
              variant="left-accent"
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
              w={{ base: '100%', md: '25%' }}
              onClick={() => history.push(`/pengaduan/${complaint.id}`)}
            >
              Detail
            </Button>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default withRouter(Result);
