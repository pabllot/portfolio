import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { Container, LogoContainer, Logo, ListLargeScreen, Li, HamburgerIcon, ListHamburguer, LiHamburguer, SocialMediaContainer, Linkedin, Github, Instagram, UL, A } from './styles'

const Navbar = ({english}) => {
    const [hamburguer, setHamburguer] = useState(false)
    const handleClick = () => setHamburguer(prev => !prev)

  return (
    <Container>
        <LogoContainer>
            <Logo src={logo} alt='Logo'/>
        </LogoContainer>
    
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
                {`${english ? 'Work' : 'Projetos'}`}
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
                    About
                </Link>
            </LiHamburguer>
            <LiHamburguer>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </LiHamburguer>
            <LiHamburguer>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </LiHamburguer>
            <LiHamburguer>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
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