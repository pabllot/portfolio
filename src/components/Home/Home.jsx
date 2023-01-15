import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'
import ReactImg from '../../assets/test.png';
import { Button, ButtonContainer, Container, H1, H2, Image, Language, LanguageContainer, Paragraph, Wrapper } from './styles';

const Home = ({english, setEnglish}) => {
  let shadowEnglish = english ? '0 1px 7px blue' : ''
  let shadowPortuguese = !english ? '0 1px 7px blue' : ''

  return (
    <Container name='home'>
        {/*<Image src={ReactImg} alt='react icon'/>*/}
       
        <Wrapper>
            <Paragraph>{` ${english ? 'Welcome to my portfolio.' : 'Bem vindo ao meu portifólio'}`}</Paragraph>
            <H1>Pablo Teixeira</H1>
            <H2>{`${english ? "I'm a Front-End Developer" : 'Desenvolvedor Front-End'}`}</H2>            
            <Link to='work' smooth={true} duration={500}>
            <ButtonContainer>
               
            </ButtonContainer>
            </Link>
            <LanguageContainer>
              <Language style={{boxShadow: shadowPortuguese}} onClick={()=>setEnglish(false)}>Português</Language>
              <Language style={{boxShadow: shadowEnglish}} onClick={()=>setEnglish(true)}>English</Language>
            </LanguageContainer>
        </Wrapper>
    </Container>
  )
}

export default Home