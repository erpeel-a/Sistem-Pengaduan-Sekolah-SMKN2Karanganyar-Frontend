import { useState, useEffect, useContext } from 'react';
import { instance } from '../../apis/axios.instance';
import { Box, Button, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import nl2br from 'react-nl2br';
import { AuthContext } from '../../contexts/AuthContext';

import FooterCard from '../layouts/FooterCard';

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
              <Text fontWeight="600" fontSize="lg" textTransform="capitalize">
                Jenis : {complaint.jenis_pengaduan}
              </Text>
              <Text fontWeight="600" fontSize="lg">
                Nama Pelapor : {complaint.nama}
              </Text>
              <Text my={2}>{nl2br(complaint.laporan)}</Text>
              {complaint.berkas_pendukung ? (
                <Button colorScheme="blue" fontWeight="400">
                  <a
                    href={`${process.env.REACT_APP_BACKEND_URL}${complaint.berkas_pendukung}`}
                    download
                  >
                    Download Berkas
                  </a>
                </Button>
              ) : (
                <Button colorScheme="blue" fontWeight="400" isDisabled>
                  Tidak Ada Berkas
                </Button>
              )}
              <Divider my={2} />
              <Heading as="h2" size="md" mb={2}>
                Tanggapan
              </Heading>
              {feedback?.tanggapan ? (
                <>
                  <Text mb={2} fontWeight="600" fontSize="lg">
                    Yang Menanggapi : {feedback.user.name}
                  </Text>
                  <Text>{nl2br(feedback.tanggapan)}</Text>
                </>
              ) : (
                <Text>Belum ada tanggapan</Text>
              )}
              <FooterCard
                history={history}
                complaint={complaint}
                push={'/pengaduan'}
                buttonTitle="Kembali"
              >
                <Text>
                  {complaint.tanggal_laporan &&
                    format(new Date(complaint.tanggal_laporan), 'dd MMM yyyy')}
                </Text>
              </FooterCard>
            </Box>
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Detail;
