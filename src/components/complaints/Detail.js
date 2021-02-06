import { useState, useEffect, useContext } from 'react';
import { instance } from '../../apis/axios.instance';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AuthContext } from '../../contexts/AuthContext';
import { checkAlert, checkStatus } from '../../utils/Check';

const Detail = ({ history, match }) => {
  const { user } = useContext(AuthContext);
  const [complaint, setComplaint] = useState({});
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    instance
      .get(match.url, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(response => setComplaint(response.data.data))
      .catch(error => console.log(error));
    instance
      .get(`/tanggapan${match.url}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(response => setFeedback(response.data.data))
      .catch(error => console.log(error));
  }, [match, user]);

  return (
    <>
      {complaint && (
        <Box pt={40} pb={5} px={{ base: 5, md: 20 }} bgColor="gray.100">
          <VStack
            px={{ base: 5, md: 10 }}
            bgColor="white"
            borderRadius="xl"
            boxShadow="md"
          >
            <Heading as="h1" size="lg" my={10} textAlign="center">
              Detail Pengaduan / Aspirasi
            </Heading>
          </VStack>
          <VStack
            my={5}
            py={10}
            px={{ base: 5, md: 10 }}
            bgColor="white"
            borderRadius="xl"
            boxShadow="md"
            spacing={5}
          >
            <Box
              py={5}
              px={{ base: 5, md: 10 }}
              w="100%"
              bgColor="gray.100"
              borderRadius="xl"
              borderBottom="2px"
              borderBottomColor="blue.600"
            >
              <Heading as="h2" size="lg">
                {complaint.judul_laporan}
              </Heading>
              <Text fontWeight="600" fontSize="lg">
                Nama Pelapor : {complaint.nama}
              </Text>
              <Divider my={2} />
              <Text>{complaint.laporan}</Text>
              <Divider my={2} />
              <Text fontWeight="600" fontSize="lg">
                Tanggapan
              </Text>
              {feedback?.tanggapan ? (
                <Text>{feedback.tanggapan}</Text>
              ) : (
                <Text>Belum ada tanggapan</Text>
              )}
              <Flex
                mt={2}
                align="center"
                direction={{ base: 'column', md: 'row' }}
              >
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
                  onClick={() => history.push('/pengaduan')}
                >
                  Kembali
                </Button>
              </Flex>
            </Box>
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Detail;
