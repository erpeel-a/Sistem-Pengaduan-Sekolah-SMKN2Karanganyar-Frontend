import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Textarea,
  VStack,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';

import CustomInput from '../layouts/CustomInput';
import Success from './Success';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/date-picker.css';

const Create = () => {
  const inputs = [
    { label: 'Judul Pengaduan / Aspirasi', type: 'text' },
    { label: 'Nomor Induk', type: 'number' },
    { label: 'Nama', type: 'text' },
    { label: 'Nomor Telepon', type: 'number' },
    { label: 'Alamat', type: 'text' },
  ];
  const [isTablet] = useMediaQuery('(min-width: 768px)');
  const [startDate, setStartDate] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = e => {
    e.preventDefault();
    onOpen();
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
          <Heading as="h1" size="lg" my={10} textAlign="center">
            Buat Pengaduan / Aspirasi
          </Heading>
          {inputs.map((input, i) => (
            <CustomInput
              key={i}
              label={input.label}
              type={input.type}
              required
              useLabel
            />
          ))}
          <FormControl mb={2} isRequired>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>
              Jenis Pengaduan
            </FormLabel>
            <Select
              size={!isTablet ? 'md' : 'lg'}
              placeholder="Silahkan Pilih Jenis Pengaduan"
            >
              <option value="Aduan">Aduan</option>
              <option value="Aspirasi">Aspirasi</option>
            </Select>
          </FormControl>
          <FormControl mb={2} isRequired>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>
              Tanggal Melapor
            </FormLabel>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showPopperArrow={false}
            />
          </FormControl>
          <FormControl mb={2} isRequired>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>
              Tulis Laporan
            </FormLabel>
            <Textarea
              placeholder="Tulis Laporan"
              resize="vertical"
              size={!isTablet ? 'md' : 'lg'}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            my={5}
            py={7}
            w="100%"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            Kirim
          </Button>
        </VStack>
      </form>
      <Success isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Create;
