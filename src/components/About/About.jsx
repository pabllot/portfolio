import { Container, Paragraph, SubContainer, TextBox, Title, Wrapper } from './styles'
import React from 'react'

const About = ({english}) => {
    
  return (
    <Container name='about'>
        <SubContainer >
            <Wrapper>
                    <Title>{`${english ? 'About' : 'Sobre'}`}</Title>
            </Wrapper>
            <Wrapper>                    
                <TextBox>
                    <Paragraph>{`${english ? "Hey there, my name is Pablo, I'm 25 years old. A frontend software developer and a series binge-watcher on my free time. Focused and commited professional always aiming to achieve goals that are set and help my team." : 'Meu nome é Pablo Teixeira, tenho 25 anos. Sou um desenvolvedor frontend e maratonador de série nas horas vagas. Profissional dedicado, determinado a sempre atingir os objetivos propostos e ajudar sua equipe.'}`}</Paragraph>
                </TextBox>
            </Wrapper>
        </SubContainer>
    </Container>
  )
}

export default About

