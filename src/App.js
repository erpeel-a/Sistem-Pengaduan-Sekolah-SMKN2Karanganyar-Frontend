import { lazy, Suspense } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import ScrollToTop from './utils/Scroll';
import Fonts from './Fonts';

import Loading from './components/layouts/Loading';
import Navbar from './components/layouts/nav/Navbar';
import Footer from './components/sections/Footer';

const Homepage = lazy(() => import('./containers/Homepage'));
const Login = lazy(() => import('./containers/Login'));
const NotFound = lazy(() => import('./components/NotFound'));
const Create = lazy(() => import('./components/complaints/Create'));
const Edit = lazy(() => import('./components/complaints/Edit'));
const Detail = lazy(() => import('./components/complaints/Detail'));
const Search = lazy(() => import('./components/complaints/Search'));

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
      <Suspense fallback={<Loading />}>
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
      </Suspense>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
