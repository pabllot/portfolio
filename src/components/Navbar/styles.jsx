import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    z-index: 50;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: rgb(10 25 47);
    color: rgb(209 213 219);
    border-bottom: 1px solid rgb(10 25 57);
    box-shadow: 0 2px 4px 0 rgb(10 25 57);
`

export const LogoContainer = styled.div`
display: flex;
gap: 40px;
@media (max-width: 768px) {display: flex;}
gap: 89px;
`

export const Logo = styled.img`
    width: 50px;
`

export const ListLargeScreen = styled.ul`
display: none;
@media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    width: 600px;
    }
`

export const Li = styled.li``

export const HamburgerIcon = styled.div`
    z-index: 20;
    @media (min-width: 768px) {display: none;}
`

export const ListHamburguer = styled.ul`
position: absolute;
z-index: 10;
top: 0px;
left: 0px;
width: 100%;
height: 100vh;
background-color: rgb(10 25 47);
display: ${(props) => (props.hamburguer ? 'flex' : 'none' )};
flex-direction: column;
justify-content: center;
align-items: center;
`

export const LiHamburguer = styled.li`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 2rem;
    line-height: 2.5rem;
    border-bottom: 1px solid gray;
`

export const SocialMediaContainer = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        position: fixed;
        flex-direction: column;
        top: 35%;
        left: 0px;
    }
`

export const UL = styled.ul``

export const Linkedin = styled.li`
 width: 160px;
 height: 60px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-left: -100px;
 transition-duration: 300ms;
 background-color: rgb(37 99 235);
 &:hover {margin-left: -10px;}
`
export const Github = styled.li`
 width: 160px;
 height: 60px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-left: -100px;
 transition-duration: 300ms;
 background-color: rgb(22 163 74);
 &:hover {margin-left: -10px;}
`
export const Instagram = styled.li`
 width: 180px;
 height: 60px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-left: -120px;
 transition-duration: 300ms;
 background-color: rgb(202 138 4);
 &:hover {margin-left: -10px;}
`

export const A = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: rgb(209 213 219);
`

export const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    @media (max-width: 768px) {display: none;}
`

export const Language = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 19px;
    width: 28px;
    border-radius: 5px;
    background: transparent;

 
`