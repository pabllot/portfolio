import { Button, ButtonClose, ButtonContainer, Card, CardHover, Container, Content, Href, InfoContainer, Paragraph, Span, SubContainer, SubTitle, Techs, Title, Wrapper } from './styles'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import tikima from '../../assets/tikima.png'
import ecommerce from '../../assets/ecommerce.png'
import pablot from '../../assets/pablot.png'
import music from '../../assets/music.png'
import video from '../../assets/video.png'
import hw from '../../assets/hm.png'

const Work = ({english}) => {
    const [videoPlayer, setVideoPlayer] = useState(false);
    const [engilshPractice, setEngilshPractice] = useState(false);
    const [tikTok, setTikTok] = useState(false);
    const [ecommerceInfo, setEcommerceInfo] = useState(false);
    const [inglesComPablot, setInglesComPablot] = useState(false);
    const [spotify, setSpotify] = useState(false);

    return (
    <Container name='work' >
        <SubContainer>
            <Wrapper>
                <Title>
                    {`${english ? 'Original Projects' : 'Projetos Originais'}`}
                </Title>
                <SubTitle>
                    {`${english ? "That's a special section where I put some of the projects I made from scratch." 
                    : 'Essa é uma seção especial onde coloco meus projetos originais favoritos.'}`}
                </SubTitle>
            </Wrapper>
            <Content>

            <Card style={{backgroundImage: `url(${hw})`}} className='group'>                    
                    <CardHover className='group-hover:opacity-100'>
                        <Span>
                            English practice app
                        </Span>
                        <ButtonContainer>
                            <Href target='blank' rel="noreferrer" href='https://inglescompabloth.vercel.app/'>
                                <Button>Site</Button>
                            </Href>
                            <Href target='blank' rel="noreferrer" href='https://github.com/pabllot/homework/'>
                                <Button>Code</Button>
                            </Href>
                            <InfoContainer>
                                <div className={`${engilshPractice ? 'info' : 'noShow'}`}>
                                    <Paragraph>{english ? 
                                    "That's a project I made in order to help my students practice what they have been learning on their classes, for each lesson there are 9 questions they should translate accordinly." : 
                                    'Esse é um projeto que fiz para ajudar meus alunos a praticar o que aprenderam em suas aulas, para cada lição há 9 perguntas que eles devem traduzir de acordo'}</Paragraph>
                                    <ButtonClose onClick={() => setEngilshPractice(false)} ><AiFillCloseCircle/></ButtonClose>
                                </div>
                                <Button  onClick={() => setEngilshPractice(true)}>+Info</Button>
                            </InfoContainer>                           
                        </ButtonContainer>
                        <Techs>ReactJS | Styled-Components | React-Router-Dom</Techs>
                    </CardHover>
            </Card>

                <Card className='group' style={{backgroundImage: `url(${video})`}}>                    
                    <CardHover className='group-hover:opacity-100'>
                        <Span>
                           Video Player app
                        </Span>
                        <ButtonContainer>
                            <Href target='blank' rel="noreferrer" href='https://next-desafio-video.vercel.app/'>
                                <Button>Site</Button>
                            </Href>
                            <Href target='blank'  rel="noreferrer" href='https://github.com/pabllot/next-desafio-video'>
                                <Button>Code</Button>
                            </Href>
                            <InfoContainer>
                                <div className={`${videoPlayer ? 'info' : 'noShow'}`}>
                                    <Paragraph>{english ? 
                                    "That's my favorite project so far. I've developed it by myself in order to apply for a frontend position, I've learned so much from it. It's a video player app full of functionalities specified by the client." : 
                                    'Esse é o meu projeto favorito até agora. Eu o desenvolvi sozinho para aplicar a uma posição de front-end, aprendi muito com isso. É um aplicativo de player de vídeo cheio de funcionalidades especificadas pelo cliente.'}</Paragraph>
                                    <ButtonClose onClick={() => setVideoPlayer(false)} ><AiFillCloseCircle /></ButtonClose>
                                </div>
                                <Button onClick={() => setVideoPlayer(true)}>+Info</Button>
                            </InfoContainer>
                        </ButtonContainer>
                            <Techs>NextJS | ReactJS | Styled-Components</Techs>
                    </CardHover>
                </Card>
            </Content>    

            <Wrapper style={{marginTop: '10rem'}}>
                <Title >{`${english ? 'Tutorial Projects' : 'Projetos Tutoriais'}`}</Title>
                <SubTitle>{`${english ? 'Projects made from tutorials in order to improve my skills.' : 'Projetos onde eu buscava melhorar minhas habilidades e aprender coisas novas.'}`}</SubTitle>
            </Wrapper>

            <Content>                
                <Card style={{backgroundImage: `url(${music})`}} className='group'>                    
                    <CardHover className='group-hover:opacity-100'>
                        <Span>
                            Music Player App 
                        </Span>
                        <ButtonContainer>
                            <Href target='blank' rel="noreferrer" href='https://spotifine.netlify.app/'>
                                <Button>Site</Button>
                            </Href>
                            <Href target='blank' rel="noreferrer" href='https://github.com/pabllot/music-player'>
                                <Button>Code</Button>
                            </Href>
                            <InfoContainer>
                                <div className={`${spotify ? 'info' : 'noShow'}`}>
                                    <Paragraph>{english ? 
                                    "On this project I build a music player app similar to spotify with all its funcionalities, it was a great experience and I learned a lot from it" : 
                                    "Neste projeto desenvolvi um aplicativo para escutar música semelhante ao spotify com todas as suas funcionalidades, foi uma ótima experiência e aprendi muito com isso"}</Paragraph>
                                    <ButtonClose onClick={() => setSpotify(false)} ><AiFillCloseCircle/></ButtonClose>
                                </div>
                                <Button  onClick={() => setSpotify(true)}>+Info</Button>
                            </InfoContainer>
                        </ButtonContainer>
                        <Techs> ReactJS | Redux | Tailwind </Techs>
                    </CardHover>
                </Card>   
                
                <Card style={{backgroundImage: `url(${ecommerce})`}} className='group'>
                    
                    <CardHover className='group-hover:opacity-100'>
                        <Span>
                            E-commerce App
                        </Span>
                        <ButtonContainer>
                            <Href target='blank' rel="noreferrer" href='https://nike-ecommerce-pied.vercel.app/'>
                                <Button>Site</Button>
                            </Href>
                            <Href target='blank' rel="noreferrer" href='https://github.com/pabllot/nike-ecommerce'>
                                <Button>Code</Button>
                            </Href>
                            <InfoContainer>
                                <div className={`${ecommerceInfo ? 'info' : 'noShow'}`}>
                                    <Paragraph>{english ? 
                                    "That's a Nike Ecommerce where I implemented advanced State Management of the entire application using React Context API. Next.js Best Practices using server-side rendering and integrationn of Stripe to manage payments." : 
                                    "Esse é um Nike Ecommerce onde implementei o gerenciamento de estado avançado de todo o aplicativo usando React Context API. Práticas recomendadas do Next.js usando Server Side Rendering e integração do Stripe para gerenciar pagamentos."}</Paragraph>
                                    <ButtonClose onClick={() => setEcommerceInfo(false)} ><AiFillCloseCircle/></ButtonClose>
                                </div>
                                <Button  onClick={() => setEcommerceInfo(true)}>+Info</Button>
                            </InfoContainer>
                        </ButtonContainer>
                        <Techs>NextJS | ReactJS | Stripe | Sanity | UseContext</Techs>
                    </CardHover>
                </Card>

                <Card style={{backgroundImage: `url(${tikima})`}} className='group'>                    
                    <CardHover className='group-hover:opacity-100'>
                        <Span>
                            Tik Tok Clone App
                        </Span>
                        <ButtonContainer>
                            <Href target='blank' rel="noreferrer" href='https://tikima.vercel.app/'>
                                <Button>Site</Button>
                            </Href>
                            <Href target='blank' rel="noreferrer" href='https://github.com/pabllot/tikima'>
                                <Button>Code</Button>
                            </Href>
                            <InfoContainer>
                                <div className={`${tikTok ? 'info' : 'noShow'}`}>
                                    <Paragraph>{english ? 
                                    "That's a TikTok clone app that includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more." : 
                                    "Esse é um aplicativo clone do TikTok que inclui Autenticação Google, a capacidade de fazer upload, publicar, compartilhar, comentar e curtir os vídeos; filtragem por categorias e funcionalidades de pesquisa avançada, páginas de perfil, contas sugeridas, design responsivo personalizado e muito mais."}</Paragraph>
                                    <ButtonClose onClick={() => setTikTok(false)} ><AiFillCloseCircle/></ButtonClose>
                                </div>
                                <Button  onClick={() => setTikTok(true)}>+Info</Button>
                            </InfoContainer>
                        </ButtonContainer>
                        <Techs>ReactJS | Typescript | Tailwind | JWT | Sanity | Zustand</Techs>
                    </CardHover>
                </Card>
                
                <Card style={{backgroundImage: `url(${pablot})`}} className='group'>                    
                    <CardHover className='group-hover:opacity-100'>
                        <Span>
                           My Comercial Website
                        </Span>
                        <ButtonContainer>
                            <Href target='blank' rel="noreferrer" href='https://pabllot.github.io/inglescompablot/'>
                                <Button>Site</Button>
                            </Href>
                            <Href target='blank' rel="noreferrer" href='https://github.com/pabllot/inglescompablot'>
                                <Button>Code</Button>
                            </Href>
                            <InfoContainer>
                                <div className={`${inglesComPablot ? 'info' : 'noShow'}`}>
                                    <Paragraph>{english ? 
                                    "My very first big project, I built a professional website to help me find more students as an English teacher. I used vanilla javascript, css and html on this project." : 
                                    "Meu primeiro grande projeto, construí um site profissional para me ajudar a encontrar mais alunos como professor de inglês. Eu usei vanilla javascript, css e html neste projeto."}</Paragraph>
                                    <ButtonClose onClick={() => setInglesComPablot(false)} ><AiFillCloseCircle/></ButtonClose>
                                </div>
                                <Button  onClick={() => setInglesComPablot(true)}>+Info</Button>
                            </InfoContainer>
                        </ButtonContainer>
                        <Techs> HTML | CSS | Javascript</Techs>

                    </CardHover>
                </Card>


            </Content>        
        </SubContainer>
    </Container>
  )
}

export default Work