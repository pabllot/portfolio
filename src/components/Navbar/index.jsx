import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";
import br from "../../assets/br.png";
import usa from "../../assets/usa.png";
import { Link } from "react-scroll";
import {
  Container,
  LogoContainer,
  Logo,
  ListLargeScreen,
  LanguageContainerMobile,
  Li,
  HamburgerIcon,
  ListHamburguer,
  LiHamburguer,
  SocialMediaContainer,
  Linkedin,
  Github,
  UL,
  A,
  Language,
  Span,
  LangImage,
  Portuguese,
  English,
} from "./styles";

const Navbar = ({ english, setEnglish }) => {
  const [hamburguer, setHamburguer] = useState(false);
  const handleClick = () => setHamburguer((prev) => !prev);

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <ListLargeScreen>
        <Li>
          <Link to="home" smooth={true} duration={500}>
            {`${english ? "Home" : "Home"}`}
          </Link>
        </Li>
        <Li>
          <Link to="skills" smooth={true} duration={500}>
            {`${english ? "Skills" : "Habilidades"}`}
          </Link>
        </Li>
        <Li>
          <Link to="work" smooth={true} duration={500}>
            {`${english ? "Projects" : "Projetos"}`}
          </Link>
        </Li>
        <Li>
          <Link to="about" smooth={true} duration={500}>
            {`${english ? "About" : "Sobre"}`}
          </Link>
        </Li>
        <Li>
          <Link to="contact" smooth={true} duration={500}>
            {`${english ? "Contact" : "Contato"}`}
          </Link>
        </Li>
      </ListLargeScreen>

      <HamburgerIcon onClick={handleClick}>{hamburguer ? <FaTimes /> : <FaBars />}</HamburgerIcon>

      <ListHamburguer hamburguer={hamburguer}>
        <LiHamburguer initial={{ opacity: 0, y: "-120%" }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, type: "tween" }}>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </LiHamburguer>
        <LiHamburguer initial={{ opacity: 0, y: "-120%" }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, type: "tween" }}>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {`${english ? "About" : "Sobre"}`}
          </Link>
        </LiHamburguer>
        <LiHamburguer initial={{ opacity: 0, y: "-120%" }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, type: "tween" }}>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {`${english ? "Skills" : "Habilidades"}`}
          </Link>
        </LiHamburguer>
        <LiHamburguer initial={{ opacity: 0, y: "-120%" }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: "tween" }}>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            {`${english ? "Projects" : "Projetos"}`}
          </Link>
        </LiHamburguer>
        <LiHamburguer initial={{ opacity: 0, y: "-120%" }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, type: "tween" }}>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {`${english ? "Contact" : "Contato"}`}
          </Link>
        </LiHamburguer>

        <LanguageContainerMobile
          initial={{ opacity: 0, y: "-120%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "tween" }}
          style={{ marginTop: "40px" }}
        >
          <Language onClick={() => setEnglish(false)}>
            <img alt="language" src={br} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </Language>
          <Language onClick={() => setEnglish(true)}>
            <img alt="language" src={usa} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </Language>
        </LanguageContainerMobile>
      </ListHamburguer>

      <SocialMediaContainer>
        <UL>
          <Portuguese
            initial={{ opacity: 0, y: -500 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "tween" }}
            onClick={() => setEnglish(false)}
          >
            <Span>Português</Span>
            <LangImage alt="language" src={br} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </Portuguese>
          <English
            initial={{ opacity: 0, y: -500 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "tween" }}
            onClick={() => setEnglish(true)}
          >
            <Span>English</Span>
            <LangImage alt="language" src={usa} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </English>
          <Linkedin initial={{ opacity: 0, y: -500 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, type: "tween" }}>
            <A target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pablo-teixeira-466497238/">
              Linkedin <FaLinkedin size={30} />
            </A>
          </Linkedin>
          <Github initial={{ opacity: 0, y: -500 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, type: "tween" }}>
            <A target="_blank" rel="noreferrer" href="https://github.com/pabllot">
              Github <FaGithub size={30} />
            </A>
          </Github>
        </UL>
      </SocialMediaContainer>
    </Container>
  );
};

export default Navbar;
