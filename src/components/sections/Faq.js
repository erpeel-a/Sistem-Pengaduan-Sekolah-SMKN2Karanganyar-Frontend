import { Box, Flex, Heading } from '@chakra-ui/react';

import Accordion from '../layouts/Accordion';

const Faq = () => {
  return (
    <Flex id="faq" px={40} py={10} flexDirection="column" alignItems="center">
      <Heading color="blue.600" mb={4}>
        Frequently Asked Question
      </Heading>
      <Box
        bgColor="gray.100"
        py={5}
        px={10}
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
