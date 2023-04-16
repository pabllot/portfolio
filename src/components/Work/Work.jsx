import { PersonalProjects, PersonalProjectsHeader, TutorialProjects, TutorialProjectsHeader } from "../../config/Projects";
import { Container, Content, SubContainer, SubTitle, Title, Wrapper } from "./styles";
import Project from "../Project";

const Work = ({ english }) => (
  <Container name="work">
    <SubContainer>
      <Wrapper>
        <Title>{`${english ? PersonalProjectsHeader[0].TitleEN : PersonalProjectsHeader[0].TitlePT}`}</Title>
        <SubTitle>{`${english ? PersonalProjectsHeader[0].SubtitleEN : PersonalProjectsHeader[0].SubtitlePT}`}</SubTitle>
      </Wrapper>{" "}
      <Content>
        {PersonalProjects.map((project) => (
          <Project english={english} project={project} />
        ))}
      </Content>
      <Wrapper style={{ marginTop: "10rem" }}>
        <Title>{`${english ? TutorialProjectsHeader[0].TitleEN : TutorialProjectsHeader[0].TitlePT}`}</Title>
        <SubTitle>{`${english ? TutorialProjectsHeader[0].SubtitleEN : TutorialProjectsHeader[0].SubtitlePT}`}</SubTitle>
      </Wrapper>
      <Content>
        {TutorialProjects.map((project) => (
          <Project english={english} project={project} />
        ))}
      </Content>
    </SubContainer>
  </Container>
);

export default Work;
