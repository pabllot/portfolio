import React from "react";
import { Container, H1, H2, Paragraph, Wrapper } from "./styles";

const Home = ({ english }) => {
  return (
    <Container name="home">
      <Wrapper>
        <Paragraph
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
        >{` ${
          english ? "Welcome to my portfolio" : "Bem vindo ao meu portifólio"
        }`}</Paragraph>
        <H1
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
        >
          Pablo Teixeira
        </H1>
        <H2
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
        >{`${
          english ? "I'm a Full Stack Developer" : "Desenvolvedor Full Stack"
        }`}</H2>
      </Wrapper>
    </Container>
  );
};

export default Home;
