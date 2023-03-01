import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import br from '../../assets/br.png'
import usa from '../../assets/usa.png'
import { Link } from 'react-scroll'
import { Container, LogoContainer, Logo, ListLargeScreen, Li, HamburgerIcon, ListHamburguer, LiHamburguer, SocialMediaContainer, Linkedin, Github, Instagram, UL, A, LanguageContainer, Language } from './styles'

const Navbar = ({english, setEnglish}) => {
    const [hamburguer, setHamburguer] = useState(false)
    const handleClick = () => setHamburguer(prev => !prev)
    let shadowEnglish = english ? '0px 2px 15px #5e95c9' : ''
    let shadowPortuguese = !english ? '0 2px 15px #5e95c9' : ''

  return (
    <Container>
        <LogoContainer>
            <Logo src={logo} alt='Logo'/>
        </LogoContainer>
            <LanguageContainer>
                <Language style={{boxShadow: shadowPortuguese}} onClick={()=>setEnglish(false)}>
                    <img src={br} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </Language>
                <Language style={{boxShadow: shadowEnglish}} onClick={()=>setEnglish(true)}>
                    <img src={usa} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </Language>
            </LanguageContainer>
    
        <ListLargeScreen>
            <Li>
                <Link to='home' smooth={true} duration={500}>
                    {`${english ? 'Home' : 'Home'}`}
                </Link>
            </Li>
            <Li>
                <Link to='skills' smooth={true} duration={500}>
                {`${english ? 'Skills' : 'Habilidades'}`}
                </Link>
            </Li>
            <Li>
                <Link to='work' smooth={true} duration={500}>
                {`${english ? 'Projects' : 'Projetos'}`}
                </Link>
            </Li>
            <Li>
                <Link to='about' smooth={true} duration={500}>
                {`${english ? 'About' : 'Sobre'}`}
                </Link>
            </Li>
            <Li>
                <Link to='contact' smooth={true} duration={500}>
                {`${english ? 'Contact' : 'Contato'}`}
                </Link>
            </Li>
            
        </ListLargeScreen>

        <HamburgerIcon onClick={handleClick}>
            { hamburguer ? <FaTimes /> : <FaBars /> }
        </HamburgerIcon>

        <ListHamburguer hamburguer={hamburguer}>
            <LiHamburguer>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </LiHamburguer>
            <LiHamburguer>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                {`${english ? 'About' : 'Sobre'}`}
                </Link>
            </LiHamburguer>
            <LiHamburguer>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                {`${english ? 'Skills' : 'Habilidades'}`}
                </Link>
            </LiHamburguer>
            <LiHamburguer>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                {`${english ? 'Projects' : 'Projetos'}`}
                </Link>
            </LiHamburguer>
            <LiHamburguer>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                {`${english ? 'Contact' : 'Contato'}`}
                </Link>
            </LiHamburguer>
        </ListHamburguer>

        <SocialMediaContainer>
            <UL>
                <Linkedin>
                    <A target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/pablo-teixeira-466497238/'>
                        Linkedin <FaLinkedin size={30}/>
                    </A>
                </Linkedin>
                <Github>
                    <A target='_blank' rel="noreferrer" href='https://github.com/pabllot'>
                        Github <FaGithub size={30}/>
                    </A>
                </Github>
                <Instagram>
                    <A target='_blank' rel="noreferrer" href='https://www.instagram.com/inglescompablot/'>
                        Instagram <FaInstagram size={30}/>
                    </A>
                </Instagram>
              
            </UL>
        </SocialMediaContainer>
    </Container>
  )
}

export default Navbar