import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: rgb(209 213 219);
  background-color: rgb(10 25 47);

  .noShow {
    display: none;
  }

  .info {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-image: linear-gradient(to right, rgba(23, 44, 75, 1), hsla(242, 52%, 33%, 1));
    width: 477px;
    height: 250px;
    left: 0;
    top: 0;
    border-radius: 10px;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    height: 1400px;
  }
`;

export const SubContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  padding-top: 1.5rem;
`;

export const Title = styled.p`
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  font-weight: 700;
  display: inline;
  border-bottom-width: 4px;
  border-bottom-color: rgb(219 39 119);
  color: rgb(209 213 219);

  @media (max-width: 400px) {
    font-size: 1.4rem /* 30px */;
  } ;
`;

export const SubTitle = styled.p`
  padding-top: 1.5rem /* 24px */;
  padding-bottom: 1.5rem;
  @media (max-width: 400px) {
    font-size: 0.95rem;
    padding-top: 0.5rem /* 24px */;
    padding-bottom: 0.5rem;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
