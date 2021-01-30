import Navbar from '../components/layouts/nav/Navbar';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Faq from '../components/sections/Faq';
import Flow from '../components/sections/Flow';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Flow />
      <Faq />
    </>
  );
};

export default Homepage;
