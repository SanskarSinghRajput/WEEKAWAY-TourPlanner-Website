import React from 'react'
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero /> 
      <Activities />
      <Booking />
      <Slider />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
 