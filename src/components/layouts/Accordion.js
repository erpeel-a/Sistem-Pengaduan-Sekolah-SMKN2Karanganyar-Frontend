import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

const Accordion = () => {
  const faqs = [
    {
      title: 'Apa itu Aplikasi Pengaduan SMKN 2 Karanganyar ?',
      content: `Seperti yang sudah dijelaskan diatas tadi, aplikasi ini dibuat untuk menampung pengaduan & aspirasi dari semua warga SMKN 2 Karanganyar.`,
    },
    {
      title:
        'Apakah bentuk respon yang diberikan kepada pelapor atas pengaduan yang disampaikan ?',
      content: `Respon akan diberikan dalam bentuk tanggapan dan konfirmasi dari petugas apakan laporan akan diterima atau ditolak.`,
    },
    {
      title: 'Apakah saya bisa mengubah laporan yang sudah saya kirimkan ?',
      content: `Tentu. Laporan dapat kamu ubah jika belum direspon atau masih dalam status "pending".`,
    },
    {
      title:
        'Berapa lama respon atas pengaduan yang disampaikan diberikan kepada pelapor ?',
      content: `Kecepatan respon tergantung pada banyaknya orang yang mengirim laporan. Tapi, jangan khawatir jika sudah direspon maka pemberitahuan akan kami kirimkan ke email kamu.`,
    },
    {
      title:
        'Apakah pengaduan yang saya berikan akan selalu mendapatkan respon ?',
      content: `Tentu saja. Pasti akan selalu mendapatkan respon.`,
    },
    {
      title:
        'Bagaimana jika saya belum paham tentang sistem ini dan ingin bertanya lebih lanjut ?',
      content: `Kamu bisa kirim pertanyaan ke email kami : rpla.smkn2kra@gmail.com`,
    },
  ];

  return (
    <ChakraAccordion allowToggle>
      {faqs.map((faq, i) => (
        <AccordionItem borderRadius="lg" key={i}>
          <AccordionButton
            _expanded={{ bg: 'gray.50', color: 'blue.600' }}
            borderRadius="lg"
          >
            <Box
              flex="1"
              textAlign="left"
              fontWeight="600"
              fontSize={{ base: 'md', xl: 'lg' }}
            >
              {faq.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontSize={{ base: 'md', xl: 'lg' }}>
            {faq.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  );
};

export default Accordion;
