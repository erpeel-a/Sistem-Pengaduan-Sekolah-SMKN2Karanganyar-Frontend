import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Accordion from '../layouts/Accordion';

const Faq = () => {
  return (
    <Flex
      as="section"
      id="faq"
      px={{ base: 5, md: 20, lg: 40 }}
      py={10}
      flexDir="column"
      alignItems="center"
    >
      <Heading color="blue.600" mb={4} textAlign="center">
        Frequently Asked Question
      </Heading>
      <Box
        bgColor="gray.100"
        py={5}
        px={{ base: 5, md: 10 }}
        borderRadius="xl"
        boxShadow="md"
        width="100%"
      >
        <Accordion />
      </Box>
    </Flex>
  );
};

export default Faq;
