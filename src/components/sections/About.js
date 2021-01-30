import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      id="tentang"
      px={{ base: 5, md: 20, lg: 40 }}
      py={10}
      flexDirection="column"
      alignItems="center"
    >
      <Heading color="blue.600" mb={4} textAlign="center">
        Untuk Apa Sistem Ini Dibuat ?
      </Heading>
      <Box
        bgColor="gray.100"
        py={5}
        px={{ base: 5, md: 10 }}
        borderRadius="xl"
        boxShadow="md"
      >
        <Text
          fontSize={{ base: 'md', xl: 'lg' }}
          lineHeight={7}
          textAlign="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ullamcorper ligula id est pharetra, at facilisis nulla lacinia.
          Pellentesque erat nibh, porta eu efficitur eget, finibus eget ligula.
          Duis nec tempor ante. Proin fermentum, ligula non congue mattis,
          lectus nunc luctus urna, ut suscipit felis erat mollis dui. Maecenas
          libero.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
