import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(10 25 47);
`;

export const Wrapper = styled(motion.div)`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media only screen and (max-width: 768px) {
    align-items: center;
    padding-top: 1rem;
  }
  @media only screen and (max-width: 640px) {
    align-items: center;
    padding-top: 1rem;
  }
`;

export const Paragraph = styled(motion.p)`
  color: rgb(219 39 119);
  font-size: 1.3rem;
  line-height: 2.6rem;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    margin-left: 5px;
  }
  @media only screen and (max-width: 640px) {
    margin-left: 12px;
    line-height: 1rem;
  }
  @media only screen and (max-width: 400px) {
    margin-left: 12px;
    font-size: 12px;
  }
`;

export const H1 = styled(motion.h1)`
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 400;
  color: rgb(204 214 246);

  @media only screen and (max-width: 768px) {
    margin-left: 5px;
    font-size: 2.2rem;
  }

  @media (max-width: 640px) {
    font-size: 2.1rem;
    font-weight: 400;
    line-height: 3rem;
    margin-left: 12px;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
    font-weight: 400;
    line-height: 3rem;
    margin-left: 12px;
  }
`;
export const H2 = styled(motion.h2)`
  font-size: 2.2rem;
  line-height: 1.5;
  font-weight: 500;
  color: rgb(136 146 176);

  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 23px;
  }
  @media (max-width: 640px) {
    font-size: 1.4rem;
    line-height: 1;
    margin-left: 12px;
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
    line-height: 1;
    margin-left: 12px;
  }
`;
