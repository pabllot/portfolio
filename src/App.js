import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Container } from "./styles";

function App() {
  const [english, setEnglish] = useState(false);

  return (
    <Container>
      <Navbar english={english} setEnglish={setEnglish} />
      <Hero english={english} setEnglish={setEnglish} />
      <Skills english={english} setEnglish={setEnglish} />
      <Work english={english} setEnglish={setEnglish} />
      <About english={english} setEnglish={setEnglish} />
      <Contact english={english} setEnglish={setEnglish} />
    </Container>
  );
}

export default App;
