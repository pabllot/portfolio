import styled from "styled-components";

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

export const Skill = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  padding: 1rem;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    box-sizing: border-box;

    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: all 0.8s ease;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    box-sizing: border-box;

    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: all 0.8s ease;
  }

  &:hover:after,
  &:hover:before {
    border-color: #2c74b3;
    width: 100%;
    height: 100%;
  }

  &:hover {
    transition: 0.5s;
    color: #2c74b3;
  }
`;

export const Image = styled.img`
  width: 5rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
`;
