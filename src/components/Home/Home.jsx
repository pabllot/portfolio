import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'
import ReactImg from '../../assets/test.png';
import { Button, ButtonContainer, Container, H1, H2, Image, Language, LanguageContainer, Paragraph, Wrapper } from './styles';

const Home = ({english, setEnglish}) => {
  let shadowEnglish = english ? '0 1px 10px blue' : ''
  let shadowPortuguese = !english ? '0 1px 10px blue' : ''

  return (
    <Container name='home'>
        <Image src={ReactImg} alt='react icon'/>
       
        <Wrapper>
            <Paragraph>{` ${english ? 'Hi, welcome to my portfolio. My name is' : 'Olá, bem vindo ao meu portifólio, meu nome é'}`}</Paragraph>
            <H1>Pablo Teixeira</H1>
            <H2>{`${english ? 'Please take a look around' : 'Fique à vontade'}`}</H2>            
            <Link to='work' smooth={true} duration={500}>
            <ButtonContainer>
                <Button className='group'>
                  {`${english ? 'View Projects' : 'Ver Projetos'}`}
                  <span className='group-hover:rotate-90 duration-300'>
                    <FaArrowRight className='ml-3'/>
                  </span> 
                </Button>
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