import {
  ChakraProvider,
  Container,
  Heading,
  Text,
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Heading>Sistem Pengaduan Sekolah</Heading>
        <Text style={{ fontSize: 24 }}>Coming Soon . . .</Text>
      </Container>
    </ChakraProvider>
  );
}

export default App;
