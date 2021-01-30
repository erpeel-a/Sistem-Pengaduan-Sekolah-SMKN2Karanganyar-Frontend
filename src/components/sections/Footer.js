import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      id="footer"
      px={{ base: 5, md: 20, lg: 40 }}
      py={10}
      justifyContent="center"
      bgColor="gray.100"
      color="gray.600"
      fontWeight="600"
    >
      <Text textAlign="center">
        &copy; 2021 - Developed by XII RPL A Dev Team
      </Text>
    </Flex>
  );
};

export default Footer;
