import {
  Container,
  Paragraph,
  SubContainer,
  TextBox,
  Title,
  Wrapper,
} from "./styles";
import React from "react";

const About = ({ english }) => {
  return (
    <Container name="about">
      <SubContainer>
        <Wrapper
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
        >
          <TextBox>
            <Title>{`${english ? "About" : "Sobre"}`}</Title>
            <Paragraph>
              {english ? (
                <>
                  <p>
                    As a FullStack developer I am passionate about programming
                    and constantly seek continuous learning. I have extensive
                    experience with modern technologies such as ReactJS,
                    TypeScript, NodeJS, and MySQL.{" "}
                  </p>
                  <p>
                    Furthermore, my CSS skills are advanced, and I am proficient
                    in tools like Sass, Styled-Components, and Tailwind,
                    utilizing them according to the specific needs of each
                    project and team.
                  </p>
                  <p>
                    I also possess broad knowledge of important development
                    libraries such as React-Query, Zustand, and others, which
                    enhance code organization and improve performance.
                  </p>{" "}
                  I have experience in MySQL administration using phpMyAdmin for
                  database management. I have worked with useful and practical
                  libraries such as Toastify, Framer Motion, Bootstrap,
                  Ant-Design, and Multer in my day-to-day web development tasks.
                  <p>
                    With my expertise in modern technologies and good
                    development practices, I am capable of creating responsive,
                    scalable, and maintainable web applications. My commitment
                    to project success is always a priority, and I strive to
                    find creative and efficient solutions for every challenge
                    that arises during the development process.
                  </p>
                </>
              ) : (
                <p>
                  Desenvolvedor FullStack apaixonado por programação, estou
                  sempre em busca de aprendizado constante. Tenho ampla
                  experiência em tecnologias modernas, como Next, React,
                  TypeScript e Node. Além disso, minhas habilidades em CSS são
                  avançadas, com domínio de ferramentas como Sass,
                  Styled-Components e Tailwind, utilizadas de acordo com as
                  necessidades de cada projeto e equipe. Também possuo amplo
                  conhecimento em bibliotecas importantes para o
                  desenvolvimento, como React-Query e outras, que agregam
                  organização e melhorias de performance ao código. Tenho
                  experiência em administração de MySQL utilizando phpmyadmin
                  para gerenciamento de bancos de dados. Experiência com
                  gerenciamento avançado de aplicações Node em produção usando
                  pm2. Experiência com processamento de solicitações HTTP usando
                  apache2. Já trabalhei com bibliotecas como Toastify, Framer
                  Motion , Bootstrap, Ant-Design e Multer que são bastante úteis
                  e práticas no dia a dia do desenvolvimento web. Cursando
                  Analise e Desenvolvimento de Sistemas. Com meu conhecimento em
                  tecnologias modernas e boas práticas de desenvolvimento, sou
                  capaz de criar aplicações web responsivas, escaláveis e fáceis
                  de manter. Meu comprometimento com o sucesso do projeto é
                  sempre prioridade e busco soluções criativas e eficientes para
                  cada desafio que surge durante o desenvolvimento.
                </p>
              )}
            </Paragraph>
          </TextBox>
        </Wrapper>
      </SubContainer>
    </Container>
  );
};

export default About;
