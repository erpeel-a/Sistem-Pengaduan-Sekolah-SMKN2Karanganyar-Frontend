import { Flex, Grid, Heading } from '@chakra-ui/react';
import {
  FiLogIn,
  FiPlusCircle,
  FiEdit3,
  FiPaperclip,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi';

import Card from '../layouts/Card';

const Flow = () => {
  const cards = [
    {
      icon: <FiLogIn />,
      title: '1. Masuk / Login',
      content: `Masuk ke sistem ini dengan email dan password yang sudah terdaftar.`,
    },
    {
      icon: <FiPlusCircle />,
      title: '2. Buat Pengaduan',
      content: `Klik tombol "Buat Pengaduan" yang tersedia di halaman ini.`,
    },
    {
      icon: <FiEdit3 />,
      title: '3. Lengkapi Form',
      content: `Isi semua form sesuai tempat yang sudah disediakan dengan data yang benar.`,
    },
    {
      icon: <FiPaperclip />,
      title: '4. Tambahkan Berkas Pendukung (Jika Ada)',
      content: `Tambahkan berkas pendukung jika perlu, agar laporan bisa lebih jelas dan mudah dipahami.`,
    },
    {
      icon: <FiSend />,
      title: '5. Kirim Pengaduan',
      content: `Kirim pengaduan agar nantinya bisa dicek oleh petugas dari sekolah.`,
    },
    {
      icon: <FiCheckCircle />,
      title: '6. Tunggu Konfirmasi',
      content: `Jika laporan sudah diterima dan ditanggapi, pemberitahuan akan dikirimkan melalui email yang digunakan.`,
    },
  ];

  return (
    <Flex
      as="section"
      id="alur"
      px={{ base: 5, md: 20, lg: 40 }}
      py={10}
      flexDir="column"
      alignItems="center"
      bgColor="gray.100"
    >
      <Heading color="blue.600" mb={8} textAlign="center">
        Bagaimana Alur Pengaduan ?
      </Heading>
      <Grid
        templateColumns={{
          sm: '1fr',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)',
        }}
        gap={8}
      >
        {cards.map((card, i) => (
          <Card
            key={i}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Flow;
