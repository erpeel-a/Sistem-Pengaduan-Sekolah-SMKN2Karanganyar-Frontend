import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Switch, Route } from 'react-router-dom';

import Homepage from './containers/Homepage';
import Footer from './components/sections/Footer';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  breakpoints,
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
