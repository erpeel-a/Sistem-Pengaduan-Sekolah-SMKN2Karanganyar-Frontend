import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Navbar from './components/layouts/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Flow from './components/sections/Flow';
import Faq from './components/sections/Faq';

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
      <Flow />
      <Faq />
    </ChakraProvider>
  );
}

export default App;
