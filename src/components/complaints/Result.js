import { withRouter } from 'react-router-dom';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

import FooterCard from '../layouts/FooterCard';

const Result = ({ history, complaints }) => (
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
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Heading as="h2" size="md">
              {complaint.judul_laporan}
            </Heading>
          </Box>
          <Box
            boxShadow="inner"
            my={{ base: 2, md: 0 }}
            p={2}
            w={{ base: '100%', md: '20%' }}
            borderRadius="lg"
          >
            <Text
              fontWeight="500"
              textAlign="center"
              textTransform="capitalize"
            >
              {complaint.jenis_pengaduan}
            </Text>
          </Box>
        </Flex>
        <Text fontWeight="600">Nama Pelapor : {complaint.nama}</Text>
        <Text isTruncated>{complaint.laporan}</Text>
        <FooterCard
          history={history}
          complaint={complaint}
          push={`/pengaduan/${complaint.id}`}
          buttonTitle="Detail"
        >
          <Text>
            {format(new Date(complaint.tanggal_laporan), 'dd MMM yyyy')}
          </Text>
        </FooterCard>
      </Box>
    ))}
  </>
);

export default withRouter(Result);
