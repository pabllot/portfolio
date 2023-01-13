import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(10 25 47);

`
export const Image = styled.img`
    position: absolute;
    width: 29rem;
    z-index: 1;
    top: 12rem;
    right: 6rem;
    opacity: 0.3;
    transition: .3s ease-in-out; 

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 768px) {
        width: 6rem;
        top: 6rem;
        left: 40%;
        opacity: 0.8;
    }

    @media only screen and (max-width: 640px) {  
        width: 6rem;
        top: 6.6rem;
        left: 9rem;
        opacity: 0.9;
    }
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

export const ButtonContainer = styled.div``

export const Paragraph = styled.p`
    color: rgb(219 39 119);
    @media only screen and (max-width: 768px) { font-size: 15px; margin-left: 5px;}
    @media only screen and (max-width: 640px) {margin-left: 12px;}
`

export const H1 = styled.h1`
    font-size: 1.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    color: rgb(204 214 246);

    @media only screen and (max-width: 768px) {margin-left: 5px;}
    
    @media (min-width: 640px) {
        font-size: 4.5rem;
        line-height: 1;
        margin-left: 12px;    
    }
`
export const H2 = styled.h2`
    font-size: 2.5rem;
    line-height: 1.5;
    font-weight: 700;
    color: rgb(136 146 176);

    @media (max-width: 768px) {margin-left: 5px; font-size: 23px; }
    @media (max-width: 640px) {font-size: 2.5rem; line-height: 1; margin-left: 12px; }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    color: white;
    font-size: 14px;   
    line-height: 2rem; 
    padding: 2px 8px;
    border-width: 2px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
 

    &:hover{
        background-color: rgb(219 39 119);
        border-color: rgb(219 39 119);
    }

    @media  (max-width: 768px) { 
        font-size: 14px;    
        padding: 2px 8px;
    }
    @media (max-width: 640px) { 
        font-size: 14px;    
        padding: 2px 8px;
    }
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
    border-radius: 10px;
    color: rgb(20, 20, 152);

`