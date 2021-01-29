import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      id="footer"
      px={40}
      py={10}
      justifyContent="center"
      bgColor="gray.100"
      color="gray.600"
      fontWeight="600"
    >
      <Text>&copy; 2021 - Developed by XII RPL A Dev Team</Text>
    </Flex>
  );
};

export default Footer;
