import { Container, Paragraph, SubContainer, TextBox, Title, Wrapper } from "./styles";
import React from "react";

const About = ({ english }) => {
  return (
    <Container name="about">
      <SubContainer>
        <Wrapper>
          <TextBox>
            <Title>{`${english ? "About" : "Sobre"}`}</Title>
            <Paragraph>{`${
              english
                ? "My name is Pablo Teixeira, and I'm a skilled frontend developer with a passion for technology. With my expertise in cutting-edge technologies and best practices in development, I excel at creating highly responsive, scalable, and maintainable web applications. I take pride in my unwavering commitment to project success, and I always strive to find innovative and efficient solutions to overcome any challenges that may arise during the development process. With my technical prowess and creative problem-solving skills, I'm confident in my ability to deliver exceptional results for any project I work on."
                : "Meu nome é Pablo Teixeira, tenho 25 anos. Sou um desenvolvedor frontend e maratonador de série nas horas vagas. Com meu conhecimento em tecnologias modernas e boas práticas de desenvolvimento, sou capaz de criar aplicações web responsivas, escaláveis e fáceis de manter. Meu comprometimento com o sucesso do projeto é sempre prioridade e busco soluções criativas e eficientes para cada desafio que surge durante o desenvolvimento."
            }`}</Paragraph>
          </TextBox>
        </Wrapper>
      </SubContainer>
    </Container>
  );
};

export default About;
