import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { Button, ButtonClose, ButtonContainer, Card, CardHover, Href, InfoContainer, Paragraph, Span, TechContainer, Techs } from "./styles";

const Project = ({ english, project, idx }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Card
        initial={{ opacity: 0, x: "-50%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        style={{ backgroundImage: `url(${project.BackgroundImage})` }}
        className="group"
      >
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
            <Techs>{project.Techs}</Techs>
          </TechContainer>
        </CardHover>
      </Card>
    </>
  );
};

export default Project;
