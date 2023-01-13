import React, { useState } from 'react'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import { Container } from './styles';

function App() {
  const [english, setEnglish] = useState(false)
  return (
    <Container>
      <Navbar english={english} setEnglish={setEnglish} />
      <Home english={english} setEnglish={setEnglish} />
      <Skills english={english} setEnglish={setEnglish} />
      <Work english={english} setEnglish={setEnglish} />
      <About english={english} setEnglish={setEnglish} />
      <Contact english={english} setEnglish={setEnglish} />
    </Container>
  );
}

export default App;
