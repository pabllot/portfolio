import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  background-color: rgb(10 25 47);
  color: rgb(209 213 219);
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
`;

export const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.p`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
  display: inline;
  @media (max-width: 400px) {
    font-size: 1.4rem /* 30px */;
  }
`;

export const SubTitle = styled.p`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 400;
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Skill = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  padding: 1rem;
`;

export const Image = styled.img`
  width: 5rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
`;
