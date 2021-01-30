import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';

const Accordion = () => {
  const faqs = [
    {
      title: 'Apa itu Aplikasi Pengaduan SMKN 2 Karanganyar ?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title:
        'Apakah bentuk respon yang diberikan kepada pelapor atas pengaduan yang disampaikan ?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title:
        'Berapa lama respon atas pengaduan yang disampaikan diberikan kepada pelapor ?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title:
        'Apakah pengaduan yang saya berikan akan selalu mendapatkan respon ?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
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
