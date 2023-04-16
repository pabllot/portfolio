import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { Button, ButtonClose, ButtonContainer, Card, CardHover, Href, InfoContainer, Paragraph, Span, TechContainer, Techs } from "./styles";

const Project = ({ english, project }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Card style={{ backgroundImage: `url(${project.BackgroundImage})` }} className="group">
        <CardHover className="group-hover:opacity-100">
          <Span>{project.Title}</Span>
          <ButtonContainer>
            <Href target="blank" rel="noreferrer" href={project.Deploy}>
              <Button>Site</Button>
            </Href>
            <Href target="blank" rel="noreferrer" href={project.Code}>
              <Button>Code</Button>
            </Href>
            <InfoContainer>
              <div className={`${modal ? "info" : "noShow"}`}>
                <Paragraph>{`${english ? project.DescEN : project.DescPT}`}</Paragraph>
                <ButtonClose onClick={() => setModal(false)}>
                  <AiFillCloseCircle />
                </ButtonClose>
              </div>
              <Button onClick={() => setModal(true)}>+Info</Button>
            </InfoContainer>
          </ButtonContainer>
          <TechContainer>
            <Techs>{Project.Techs}</Techs>
          </TechContainer>
        </CardHover>
      </Card>
    </>
  );
};

export default Project;
