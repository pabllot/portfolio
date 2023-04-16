import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 250px;

  &:hover {
    background-image: linear-gradient(to right, rgba(23, 44, 75, 1), hsla(242, 52%, 33%, 1)) !important;
  }

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

export const CardHover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.05em;
`;

export const ButtonContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  text-align: center;
`;

export const InfoContainer = styled.div``;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 8;
  text-align: center;
  height: 100%;
  padding: 18px;
  font-size: 15px;
  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (max-width: 450px) {
    font-size: 11px;
  }
`;

export const ButtonClose = styled.button`
  flex: 1;
  font-size: 40px;
  margin-top: 10px;
  > svg {
    border-radius: 10px;
    color: white;
  }
`;
export const Button = styled.button`
  text-align: center;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin: 0.5rem;
  background-color: white;
  color: rgb(55 65 81);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.75rem;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 50px;
    font-size: 0.8rem;
  }
`;

export const Href = styled.a``;

export const Techs = styled.p`
  font-size: 0.9rem;

  @media (max-width: 780px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;
export const TechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
