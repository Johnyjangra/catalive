
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from './components/Nav';
import Hero from './components/Hero';
import OurPlatform from './components/OurPlatform';
import Demo from './components/Demo';
import EyeSection from './components/EyeSection';
import WatchNow from "../src/components/WatchNow"
import Approach from './components/Approach';
import Close from './components/Close';
import GetStart from './components/GetStart';
import Move from './components/Move';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Market from './components/Market';
import Footer from './components/Footer';
import Backtop from './components/Backtop';


function App() {
  return (
    <>
      {/* <Nav /> */}
      <Hero />
      <WatchNow />
      <OurPlatform />
      <EyeSection />
      <Approach />
      <Close />
      <GetStart/>
  <Move/>
  <Market/>
  <Footer/>
  <Backtop/>
     
    </>
  );
}

export default App;
