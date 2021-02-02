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
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';

import CustomInput from '../layouts/CustomInput';
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
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = e => {
    e.preventDefault();
    alert('Laporan Berhasil Dikirim!');
  };

  return (
    <Box pt={40} pb={5} px={20} bgColor="gray.100">
      <form onSubmit={handleSubmit}>
        <VStack px={10} bgColor="white" borderRadius="xl" boxShadow="md">
          <Heading as="h1" size="lg" my={10}>
            Buat Pengaduan / Aspirasi
          </Heading>
          {inputs.map((input, i) => (
            <CustomInput
              key={i}
              label={input.label}
              type={input.type}
              required
            />
          ))}
          <FormControl mb={2} isRequired>
            <FormLabel>Jenis Pengaduan</FormLabel>
            <Select placeholder="Silahkan Pilih Jenis Pengaduan">
              <option value="Aduan">Aduan</option>
              <option value="Aspirasi">Aspirasi</option>
            </Select>
          </FormControl>
          <FormControl mb={2} isRequired>
            <FormLabel>Tanggal Melapor</FormLabel>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showPopperArrow={false}
            />
          </FormControl>
          <FormControl mb={2} isRequired>
            <FormLabel>Tulis Laporan</FormLabel>
            <Textarea placeholder="Tulis Laporan" resize="vertical" />
          </FormControl>
          <Button type="submit" colorScheme="blue" my={5} w="100%">
            Kirim
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Create;
