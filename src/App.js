import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './containers/Homepage';
import Footer from './components/sections/Footer';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
