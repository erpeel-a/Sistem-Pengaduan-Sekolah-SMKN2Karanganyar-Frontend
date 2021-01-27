import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Navbar from './components/layouts/Navbar';
import Home from './components/sections/Home';

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
      <Home />
    </ChakraProvider>
  );
}

export default App;
