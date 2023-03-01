import React from 'react'
import { Container, H1, H2, Paragraph, Wrapper } from './styles';

const Home = ({english}) => {
   return (
    <Container name='home'>      
        <Wrapper>
            <Paragraph>{` ${english ? 'Welcome to my portfolio' : 'Bem vindo ao meu portifólio'}`}</Paragraph>
            <H1>Pablo Teixeira</H1>
            <H2>{`${english ? "I'm a Front-End Developer" : 'Desenvolvedor Front-End'}`}</H2>            
        </Wrapper>
    </Container>
  )
}

export default Home