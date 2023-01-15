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
        background-image: linear-gradient(to right,rgba(23, 44, 75, 1),hsla(242, 52%, 33%, 1));
        width: 477px;
        height: 250px;
        left: 0;
        top: 0;
        border-radius: 10px;        
    }

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

    @media (max-width: 400px) {   font-size: 1.4rem/* 30px */;
};

`

export const SubTitle = styled.p`
    padding-top: 1.5rem/* 24px */;
    padding-bottom: 1.5rem;
    @media (max-width: 400px) { 
        font-size: .95rem;
        padding-top: .5rem/* 24px */;
        padding-bottom: .5rem;
    }
`

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

export const Span = styled.span`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: white;
    letter-spacing: 0.05em;
`

export const ButtonContainer = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    text-align: center;
`

export const InfoContainer = styled.div``


export const Paragraph = styled.p`
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 8;
    text-align: center;
    height: 100%;
    padding: 18px;
    font-size: 17px;
`

export const ButtonClose = styled.button`
    flex: 1;
    font-size: 40px;
    margin-top: 10px;
    > svg {
        border-radius: 10px;
        color: white;
    }
    `
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
    font-size: 1.125rem;
    line-height: 1.75rem;
    @media (max-width: 450px) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        width: 50px;
        font-size: 0.8rem;
    }

`

export const Href = styled.a``

export const Techs = styled.p`
    font-size: 1rem;
    
    @media (max-width: 350px) {
        font-size: .7rem;}
`
export const TechContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%`
