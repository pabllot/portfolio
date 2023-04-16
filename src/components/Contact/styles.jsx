import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 900px;
  background-color: rgb(10 25 47);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding-bottom: 2rem;
`;

export const Title = styled.p`
  font-size: 2rem /* 36px */;
  line-height: 2.5rem;
  font-weight: 700;
  display: inline;
  color: rgb(209 213 219);

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const Paragraph = styled.p`
  color: rgb(209 213 219);
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 400;
  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
`;

export const NameInput = styled.input`
  background-color: rgb(204 214 246);
  padding: 0.5rem;
  outline: none;
  font-size: 1.1rem;
  font-weight: 400;

  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
`;
export const EmailInput = styled.input`
  background-color: rgb(204 214 246);
  padding: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  outline: none;
  font-size: 1.1rem;
  font-weight: 400;

  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
`;

export const TextArea = styled.textarea`
  background-color: rgb(204 214 246);
  outline: none;
  font-size: 1.1rem;
  font-weight: 400;

  padding: 0.5rem;
  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
`;

export const Button = styled.button`
  color: white;
  border-width: 2px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  font-weight: 400;
  @media (max-width: 400px) {
    font-size: 0.95rem;
  }

  &:hover {
    border-color: rgb(219 39 119);
    background-color: rgb(219 39 119);
  }
`;
