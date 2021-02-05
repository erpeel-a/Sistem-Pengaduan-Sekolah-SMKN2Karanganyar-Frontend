import { useState, useContext } from 'react';
import { instance } from '../../apis/axios.instance';
import { formatISO } from 'date-fns';
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
import { AuthContext } from '../../contexts/AuthContext';

import CustomInput from '../layouts/CustomInput';
import Success from './Success';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/date-picker.css';

const Create = () => {
  const [isTablet] = useMediaQuery('(min-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(AuthContext);

  const defaultData = {
    judul_laporan: '',
    nomor_induk: user.nomor_induk,
    nama: user.name,
    email: user.email,
    no_telp: '',
    alamat: '',
    jenis_pengaduan: '',
    laporan: '',
  };

  const [state, setState] = useState(defaultData);
  const [date, setDate] = useState(new Date());

  const inputs = [
    {
      label: 'Judul Pengaduan / Aspirasi',
      type: 'text',
      value: state.judul_laporan,
      change: e => setState({ ...state, judul_laporan: e.target.value }),
    },
    {
      label: 'Nomor Induk',
      type: 'number',
      readOnly: true,
      value: state.nomor_induk,
    },
    {
      label: 'Nama',
      type: 'text',
      readOnly: true,
      value: state.nama,
    },
    {
      label: 'Email',
      type: 'email',
      readOnly: true,
      value: state.email,
    },
    {
      label: 'Nomor Telepon',
      type: 'number',
      value: state.no_telp,
      change: e => setState({ ...state, no_telp: e.target.value }),
    },
    {
      label: 'Alamat',
      type: 'text',
      value: state.alamat,
      change: e => setState({ ...state, alamat: e.target.value }),
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    instance
      .post(
        '/pengaduan',
        {
          ...state,
          tanggal_laporan: formatISO(new Date(date), {
            representation: 'date',
          }),
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(response => {
        setState(defaultData);
        setDate(new Date());
        onOpen();
      })
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
          <Heading as="h1" size="lg" my={10} textAlign="center">
            Buat Pengaduan / Aspirasi
          </Heading>
          {inputs.map((input, i) => (
            <CustomInput
              key={i}
              label={input.label}
              type={input.type}
              readOnly={input.readOnly}
              value={input.value}
              onChange={input.change}
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
              onChange={e =>
                setState({ ...state, jenis_pengaduan: e.target.value })
              }
            >
              <option value="pengaduan">Pengaduan</option>
              <option value="aspirasi">Aspirasi</option>
            </Select>
          </FormControl>
          <FormControl mb={2} isRequired>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>
              Tanggal Melapor
            </FormLabel>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
              showPopperArrow={false}
            />
          </FormControl>
          <FormControl mb={2} isRequired>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>
              Tulis Laporan
            </FormLabel>
            <Textarea
              value={state.laporan}
              onChange={e => setState({ ...state, laporan: e.target.value })}
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
