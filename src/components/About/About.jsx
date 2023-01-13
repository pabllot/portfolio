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
                    <Paragraph>{`${english ? "I'm 25 years old, an easy-going person, passionate about programming and eager to learn more and more every day. Former online English teacher, still teach some private students to have some extra money by the end of the month, alongside with frontend freelances." : 'Tenho 25 anos, uma pessoa descontraída, apaixonada por programação e com vontade de aprender cada dia mais. Ex-professor de inglês online, ainda ensino alguns alunos particulares para ter uma grana extra no final do mês, junto com freelances de frontend.'}`}</Paragraph>
                </TextBox>
            </Wrapper>
        </SubContainer>
    </Container>
  )
}

export default About

