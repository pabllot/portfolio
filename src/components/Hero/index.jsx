import React from 'react'
import { Container, H1, H2, Paragraph, Wrapper } from './styles';
import './styles.css'

const Home = ({english}) => {
   return (
    <Container name='home'>      
        <Wrapper>
            <Paragraph className='slider-left slider-top'>{` ${english ? 'Welcome to my portfolio' : 'Bem vindo ao meu portifólio'}`}</Paragraph>
            <H1 className='slider-right'>Pablo Teixeira</H1>
            <H2 className='slider-left'>{`${english ? "I'm a Front-End Developer" : 'Desenvolvedor Front-End'}`}</H2>            
        </Wrapper>
    </Container>
  )
}

export default Home