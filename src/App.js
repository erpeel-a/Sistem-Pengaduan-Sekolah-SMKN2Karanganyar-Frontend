import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Navbar from './components/layouts/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';

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
      <About />
    </ChakraProvider>
  );
}

export default App;
