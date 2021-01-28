import { Flex, Heading, Text } from '@chakra-ui/react';
import { IconContext } from 'react-icons';

const Card = ({ icon, title, content }) => {
  return (
    <Flex
      p={10}
      flexDir="column"
      alignItems="center"
      bgColor="white"
      borderRadius="xl"
      boxShadow="md"
    >
      <IconContext.Provider value={{ size: '28px' }}>
        <Flex
          p={6}
          justifyContent="center"
          alignItems="center"
          w={20}
          h={20}
          color="white"
          bgColor="blue.600"
          borderRadius="full"
        >
          {icon}
        </Flex>
      </IconContext.Provider>
      <Heading as="h3" size="lg" my={4} fontWeight="600" color="blue.600">
        {title}
      </Heading>
      <Text textAlign="center" fontSize="lg" color="gray.600">
        {content}
      </Text>
    </Flex>
  );
};

export default Card;
