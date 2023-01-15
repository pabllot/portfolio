import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 600px;
background-color: rgb(10 25 47);
color: rgb(209 213 219);
`

export const SubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
gap: 15px;
`

export const Wrapper = styled.div`
max-width: 1000px;
width: 100%;
padding-left: 1rem;
padding-right: 1rem;
display: flex;
align-items: center;
justify-content: center;
`

export const TextBox = styled.div`width: 600px;`

export const Paragraph = styled.p`
    @media only screen and (max-width: 400px) {
        font-size: .95rem;
        padding: 0 1rem ;
    }

`

export const Title = styled.p`
font-size: 2.25rem/* 36px */;
line-height: 2.5rem/* 40px */;
font-weight: 700;
display: inline;
border-bottom-width: 4px;
border-color: rgb(219 39 119);

@media (max-width: 400px) {   font-size: 1.4rem}

`

