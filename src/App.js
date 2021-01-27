import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Navbar from './components/layouts/Navbar';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
