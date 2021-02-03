import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react';

const Result = () => {
  const results = [
    { alert: 'Diterima', status: 'success' },
    { alert: 'Ditolak', status: 'error' },
    { alert: 'Pending', status: 'warning' },
  ];

  return (
    <>
      {results.map((result, i) => (
        <Box
          key={i}
          py={5}
          px={{ base: 5, md: 10 }}
          w="100%"
          bgColor="gray.100"
          borderRadius="xl"
          borderBottom="2px"
          borderBottomColor="blue.600"
        >
          <Heading as="h2" size="md">
            Judul Pengaduan
          </Heading>
          <Text fontWeight="600">Nama Pelapor : Hendra Agil</Text>
          <Text isTruncated>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            asperiores iure obcaecati officiis harum corporis. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Numquam asperiores
            iure obcaecati officiis harum corporis.
          </Text>
          <Flex mt={2} align="center" direction={{ base: 'column', md: 'row' }}>
            <Alert
              status={result.status}
              variant="left-accent"
              h={10}
              borderRadius="lg"
            >
              <AlertIcon />
              {result.alert}
            </Alert>
            <Button
              colorScheme="blue"
              mt={{ base: 2, md: 0 }}
              ml={{ base: 0, md: 4 }}
              w={{ base: '100%', md: '25%' }}
            >
              Detail
            </Button>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default Result;
