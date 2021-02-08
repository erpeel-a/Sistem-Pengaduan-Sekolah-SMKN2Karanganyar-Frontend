import { Spinner as ChakraSpinner } from '@chakra-ui/react';

const Spinner = () => (
  <ChakraSpinner
    thickness="8px"
    speed="0.5s"
    emptyColor="gray.100"
    color="blue.600"
    size="xl"
  />
);

export default Spinner;
