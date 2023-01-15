import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(10 25 47);

`

export const Wrapper = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media only screen and (max-width: 768px) {align-items: center; padding-top: 1rem;}
    @media only screen and (max-width: 640px) {align-items: center; padding-top: 1rem;}
`

export const Paragraph = styled.p`
    color: rgb(219 39 119);
    font-size: 1.3rem;
    line-height: 2.6rem;
    @media only screen and (max-width: 768px) { font-size: 15px; margin-left: 5px;}
    @media only screen and (max-width: 640px) {margin-left: 12px; line-height: 1rem;}
    @media only screen and (max-width: 400px) {
        margin-left: 12px;
        font-size: 12px;
        }
`

export const H1 = styled.h1`
    font-size: 3rem;
    line-height: 2.5rem;
    font-weight: 700;
    color: rgb(204 214 246);
    
    @media only screen and (max-width: 768px) {margin-left: 5px;}
    
    @media (max-width: 640px) {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1;
        margin-left: 12px;    
    }
    @media (max-width: 400px) {
        font-size: 2.2rem;
        font-weight: 700;
        line-height: 1.2;
        margin-left: 12px;    
    }
`
export const H2 = styled.h2`
    font-size: 2.2rem;
    line-height: 1.5;
    font-weight: 700;
    color: rgb(136 146 176);

    @media (max-width: 768px) {margin-left: 5px; font-size: 23px; }
    @media (max-width: 640px) {font-size: 1rem; line-height: 1; margin-left: 12px; }
    @media (max-width: 400px) {font-size: 1rem; line-height: 1; margin-left: 12px; }
`

export const LanguageContainer = styled.div`
  margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    @media  (max-width: 768px) { 
        justify-content: center;
        margin-top: 7rem;

    }
     @media (max-width: 640px) {
        justify-content: center;
        margin-top: 7rem;
     } 
`

export const Language = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: antiquewhite;
    height: 40px;
    width: 140px;
    border-radius: 5px;
    color: rgb(20, 20, 152);

    @media (max-width: 640px) { 
        height: 23px;
        width: 100px;
        font-size: 14px;
    }

`