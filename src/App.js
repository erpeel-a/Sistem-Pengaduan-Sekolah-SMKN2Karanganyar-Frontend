import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import ScrollToTop from './utils/Scroll';
import Fonts from './Fonts';

import Navbar from './components/layouts/nav/Navbar';
import Homepage from './containers/Homepage';
import Login from './containers/Login';
import Create from './components/complaints/Create';
import Edit from './components/complaints/Edit';
import Search from './components/complaints/Search';
import Detail from './components/complaints/Detail';
import NotFound from './components/NotFound';
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
      <Fonts />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <PrivateRoute path="/buat" component={Create} />
        <PrivateRoute path="/pengaduan/:id/ubah" component={Edit} />
        <PrivateRoute path="/pengaduan/:id" component={Detail} />
        <PrivateRoute path="/pengaduan" component={Search} />
        <Redirect to="not-found" />
      </Switch>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
