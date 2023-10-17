import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background-color: rgb(10 25 47);
  margin-bottom: -8rem;
  color: rgb(209 213 219);
  @media only screen and (max-width: 990px) {
    padding: 0;
    margin-top: 2rem;
    margin-bottom: -3rem;
  }
  @media only screen and (max-width: 400px) {
    min-height: 100vh;
    margin: 2rem 0;
    margin-top: 7rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 15px;
`;

export const Wrapper = styled(motion.div)`
  max-width: 1000px;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  width: 700px;
`;

export const Paragraph = styled(motion.div)`
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 1rem;
  text-align: justify;
  @media only screen and (max-width: 992px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;

export const Title = styled(motion.p)`
  font-size: 2rem /* 36px */;
  line-height: 2.5rem /* 40px */;
  font-weight: 700;
  display: inline;

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;
