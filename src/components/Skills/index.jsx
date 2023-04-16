import { Container, Image, Paragraph, Skill, SkillsContainer, SubContainer, SubTitle, Title, TitleWrapper } from "./styles";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import GitHub from "../../assets/github.png";
import Styled from "../../assets/styled-components.png";
import Typescript from "../../assets/typescript.svg";
import { motion } from "framer-motion";

const Skills = ({ english }) => {
  return (
    <Container name="skills">
      <SubContainer>
        <TitleWrapper>
          <Title>{`${english ? "Skills" : "Habilidades"}`}</Title>
          <SubTitle>{`${
            english ? "These are some of the technologies I use the most in my projects." : "Essas são as tecnologias que tenho usado em meus projetos"
          }`}</SubTitle>
        </TitleWrapper>

        <SkillsContainer>
          <Skill initial={{ opacity: 0, x: "-20%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 100 }}>
            <Image src={HTML} alt="html icon" />
            <Paragraph>HTML</Paragraph>
          </Skill>
          <Skill initial={{ opacity: 0, x: "-20%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, type: "spring", stiffness: 100 }}>
            <Image src={CSS} alt="html icon" />
            <Paragraph>CSS</Paragraph>
          </Skill>
          <Skill initial={{ opacity: 0, x: "-20%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, type: "spring", stiffness: 100 }}>
            <Image src={JavaScript} alt="html icon" />
            <Paragraph>JavaScript</Paragraph>
          </Skill>
          <Skill initial={{ opacity: 0, x: "-20%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, type: "spring", stiffness: 100 }}>
            <Image src={Typescript} alt="html icon" />
            <Paragraph>Typescript</Paragraph>
          </Skill>
          <Skill initial={{ opacity: 0, x: "-20%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: "spring", stiffness: 100 }}>
            <Image src={ReactImg} alt="html icon" />
            <Paragraph>React</Paragraph>
          </Skill>
          <Skill initial={{ opacity: 0, x: "-20%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, type: "spring", stiffness: 100 }}>
            <Image src={Styled} alt="html icon" />
            <Paragraph>Styled-components</Paragraph>
          </Skill>
          <Skill initial={{ opacity: 0, x: "-20%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, type: "spring", stiffness: 100 }}>
            <Image src={Node} alt="html icon" />
            <Paragraph>Node</Paragraph>
          </Skill>
          <Skill initial={{ opacity: 0, x: "-20%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, type: "spring", stiffness: 100 }}>
            <Image src={GitHub} alt="html icon" />
            <Paragraph>Github</Paragraph>
          </Skill>
        </SkillsContainer>
      </SubContainer>
    </Container>
  );
};

export default Skills;
