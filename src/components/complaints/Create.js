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
  HStack,
  VStack,
  useMediaQuery,
  useDisclosure,
  useToast,
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
  const toast = useToast();

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
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);

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
    setLoad(true);

    const {
      alamat,
      email,
      jenis_pengaduan,
      judul_laporan,
      laporan,
      nama,
      no_telp,
      nomor_induk,
    } = state;
    const tanggal_laporan = formatISO(new Date(date), {
      representation: 'date',
    });

    let formData = new FormData();
    formData.append('alamat', alamat);
    formData.append('berkas_pendukung', file);
    formData.append('email', email);
    formData.append('jenis_pengaduan', jenis_pengaduan);
    formData.append('judul_laporan', judul_laporan);
    formData.append('laporan', laporan);
    formData.append('nama', nama);
    formData.append('no_telp', no_telp);
    formData.append('nomor_induk', nomor_induk);
    formData.append('tanggal_laporan', tanggal_laporan);

    instance
      .post('/pengaduan', formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        setLoad(false);
        setState(defaultData);
        setDate(new Date());
        onOpen();
      })
      .catch(error => {
        setLoad(false);
        console.log(error);
        error?.response?.data?.data?.no_telp &&
          toast({
            position: 'top',
            title: error.response.data.data.no_telp[0],
            status: 'error',
            duration: 4000,
            isClosable: true,
          });
      });
  };

  return (
    <Box pt={40} pb={5} px={{ base: 5, md: 20 }} bgColor="gray.100">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
              value={state.jenis_pengaduan}
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
          <CustomInput
            pt={{ base: '4px', md: '6px' }}
            label="Berkas / File Pendukung"
            type="file"
            onChange={e => setFile(e.target.files[0])}
            accept=".xls, .xlsx, .doc, .docx, .pdf"
            useLabel
          />
          <HStack my={5} w="100%">
            <Button
              colorScheme="green"
              py={7}
              w="50%"
              fontSize={{ base: 'md', md: 'lg' }}
              onClick={() => {
                setState(defaultData);
                setDate(new Date());
              }}
            >
              Bersihkan
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              py={7}
              w="50%"
              fontSize={{ base: 'md', md: 'lg' }}
              isLoading={load}
            >
              Kirim
            </Button>
          </HStack>
        </VStack>
      </form>
      <Success isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Create;
