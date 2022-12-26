import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className='bg-[#0a192f] text-xl font-bold'>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
