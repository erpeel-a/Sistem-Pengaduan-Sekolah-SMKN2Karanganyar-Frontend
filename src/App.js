import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/nav/Navbar';
import Homepage from './containers/Homepage';
import Login from './containers/Login';
import Create from './components/complaints/Create';
import Search from './components/complaints/Search';
import Detail from './components/complaints/Detail';
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
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/buat" component={Create} />
        <Route path="/pengaduan/:id" component={Detail} />
        <Route path="/pengaduan" component={Search} />
      </Switch>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
