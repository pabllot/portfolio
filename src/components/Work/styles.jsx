import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    color: rgb(209 213 219);
    background-color: rgb(10 25 47);
    @media (min-width: 768px) {height: 1400px;}
`

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

`

export const Wrapper = styled.div`
padding-top: 1.5rem;
`

export const Title = styled.p`
   font-size: 1.875rem/* 30px */;
    line-height: 2.25rem/* 36px */;
    font-weight: 700;
    display: inline;
    border-bottom-width: 4px;
    border-bottom-color: #c929b9;
    color: rgb(209 213 219);
`

export const SubTitle = styled.p`padding-top: 1.5rem/* 24px */;
padding-bottom: 1.5rem;`

export const Content = styled.div`
    display: grid;
    gap: 1rem;

    @media (min-width: 640px) {grid-template-columns: repeat(2, minmax(0, 1fr))};
    @media (min-width: 768px) {grid-template-columns: repeat(2, minmax(0, 1fr));}
`

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

    &:hover {background-image: linear-gradient(to right, rgba(23, 44, 75, 1),hsla(242, 52%, 33%, 1))!important;}

    @media (min-width: 640px) { max-width: 640px;}
    @media (min-width: 768px) { max-width: 768px }
`

export const CardHover =styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
opacity: 0;
`