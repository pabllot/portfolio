import React from 'react'
import { Container, H1, H2, Language, LanguageContainer, Paragraph, Wrapper } from './styles';

const Home = ({english, setEnglish}) => {
  let shadowEnglish = english ? '0 1px 7px blue' : ''
  let shadowPortuguese = !english ? '0 1px 7px blue' : ''

  return (
    <Container name='home'>      
        <Wrapper>
            <Paragraph>{` ${english ? 'Welcome to my portfolio.' : 'Bem vindo ao meu portifólio'}`}</Paragraph>
            <H1>Pablo Teixeira</H1>
            <H2>{`${english ? "I'm a Front-End Developer" : 'Desenvolvedor Front-End'}`}</H2>            
            <LanguageContainer>
              <Language style={{boxShadow: shadowPortuguese}} onClick={()=>setEnglish(false)}>Português</Language>
              <Language style={{boxShadow: shadowEnglish}} onClick={()=>setEnglish(true)}>English</Language>
            </LanguageContainer>
        </Wrapper>
    </Container>
  )
}

export default Home