import { Flex } from '@chakra-ui/react';

import Spinner from './Spinner';

const Loading = () => (
  <Flex
    as="section"
    h="100vh"
    justify="center"
    align="center"
    bgColor="gray.100"
  >
    <Spinner />
  </Flex>
);

export default Loading;
