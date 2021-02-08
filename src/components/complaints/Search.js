import { useState, useEffect, useContext } from 'react';
import { instance } from '../../apis/axios.instance';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AuthContext } from '../../contexts/AuthContext';

import CustomInput from '../layouts/CustomInput';
import Result from './Result';

const Search = ({ history }) => {
  const [complaints, setComplaints] = useState({});
  const [keyword, setKeyword] = useState('');
  const { user } = useContext(AuthContext);
  const { pathname, search } = history.location;

  useEffect(() => {
    instance
      .get(`${pathname}${search}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(response => setComplaints(response.data.data))
      .catch(error => console.log(error));
  }, [pathname, search, user]);

  const handleSubmit = e => {
    e.preventDefault();
    instance
      .get(`/pengaduan?judul_laporan=${keyword}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(response => setComplaints(response.data.data))
      .catch(error => console.log(error));
  };

  return (
    <Box pt={40} pb={5} px={{ base: 5, md: 20 }} bgColor="gray.100">
      <form onSubmit={handleSubmit}>
        <VStack
          px={{ base: 5, md: 10 }}
          bgColor="white"
          borderRadius="xl"
          boxShadow="md"
        >
          <Heading as="h1" size="lg" mt={10} mb={5} textAlign="center">
            Cari Pengaduan / Aspirasi
          </Heading>
          <CustomInput
            label="Pencarian Berdasarkan Judul Laporan"
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            required
          />
          <Button
            type="submit"
            colorScheme="blue"
            my={5}
            py={7}
            w="100%"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            Cari
          </Button>
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
          <Result complaints={complaints} email={user.email} />
          <Flex justify="space-between" align="center" w="100%">
            {complaints && (
              <Text>
                Showing <b>{complaints.from}</b> to <b>{complaints.to}</b> of{' '}
                <b>{complaints.total}</b> results
              </Text>
            )}
            <HStack>
              {complaints?.prev_page_url && (
                <IconButton
                  aria-label="Previous Page"
                  icon={<ArrowLeftIcon />}
                  borderRadius="xl"
                  borderBottom="2px"
                  borderBottomColor="blue.600"
                  onClick={() =>
                    history.push(
                      `/pengaduan?page=${complaints.current_page - 1}`
                    )
                  }
                />
              )}
              {complaints?.next_page_url && (
                <IconButton
                  aria-label="Next Page"
                  icon={<ArrowRightIcon />}
                  borderRadius="xl"
                  borderBottom="2px"
                  borderBottomColor="blue.600"
                  onClick={() =>
                    history.push(
                      `/pengaduan?page=${complaints.current_page + 1}`
                    )
                  }
                />
              )}
            </HStack>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default Search;
