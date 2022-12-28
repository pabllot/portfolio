import React from 'react'
import tikima from '../assets/tikima.png'
import ecommerce from '../assets/ecommerce.png'
import chores from '../assets/chores.png'
import pablot from '../assets/pablot.png'
import music from '../assets/music.png'
import video from '../assets/video.png'
import hw from '../assets/hm.png'
import cricket from '../assets/cricket.png'
import './styles.css'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Work = ({english}) => {
    // states for info
    const [videoPlayer, setVideoPlayer] = useState(false);
    const [engilshPractice, setEngilshPractice] = useState();
    const [cricketInfo, setCricketInfo] = useState();
    const [choresInfo, setChoresInfo] = useState();
    const [tikTok, setTikTok] = useState();
    const [ecommerceInfo, setEcommerceInfo] = useState();
    const [inglesComPablot, setInglesComPablot] = useState();
    const [spotify, setSpotify] = useState();


    // {`${english ? 'About' : 'Sobre'}`}
  return (
    <div name='work' className='w-full md:h-[1400px] text-gray-300 bg-[#0a192f]'>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>


        <div className='pt-6'>
                <p className='text-3xl font-bold inline border-b-4 text-gray-300 border-pink-600'>{`${english ? 'ORIGINAL PROJECTS' : 'PROJETOS ORIGINAIS'}`}</p>
                <p className='py-6'>{`${english ? "That's a special section where I put some of the projects I made from scratch" : 'Essa é uma seção especial onde coloco os projetos originais que fiz sozinho.'}`}</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

            <div style={{backgroundImage: `url(${video})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 '>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                           Video Player app
                        </span>
                        <div className='pt-8 flex text-center'>
                            <a target='blank' rel="noreferrer" href='https://next-desafio-video.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            {/*<a target='blank'  rel="noreferrer" href='https://github.com/pabllot/next-desafio-video'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>*/}
                            <div>
                                <div className={`${videoPlayer ? 'info' : 'noShow'}`}>
                                    <p className='text'>{english ? 
                                    "That's my favorite project so far. I've developed it by myself in order to apply for a frontend position, I've learned so much from it. It's a video player app full of functionalities specified by the client." : 
                                    'Esse é o meu projeto favorito até agora. Eu o desenvolvi sozinho para aplicar a uma posição de front-end, aprendi muito com isso. É um aplicativo de player de vídeo cheio de funcionalidades especificadas pelo cliente.'}</p>
                                    <button className='btn-close' onClick={() => setVideoPlayer(false)} ><AiFillCloseCircle /></button>
                                </div>
                                <button  onClick={() => setVideoPlayer(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>+Info</button>
                            </div>
                        </div>
                    </div>
                </div>

            <div style={{backgroundImage: `url(${hw})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='flex items-center justify-center flex-col opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            English practice app
                        </span>
                        <div className='pt-8 flex text-center'>
                            <a target='blank' rel="noreferrer" href='https://inglescompabloth.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/homework/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${engilshPractice ? 'info' : 'noShow'}`}>
                                    <p className='text'>{english ? 
                                    "That's a project I made in order to help my students practice what they have been learning on their classes, for each lesson there are 9 questions they should translate accordinly." : 
                                    'Esse é um projeto que fiz para ajudar meus alunos a praticar o que aprenderam em suas aulas, para cada lição há 9 perguntas que eles devem traduzir de acordo'}</p>
                                    <button className='btn-close' onClick={() => setEngilshPractice(false)} ><AiFillCloseCircle/></button>
                                </div>
                                <button  onClick={() => setEngilshPractice(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>+Info</button>
                            </div>                           
                        </div>
                    </div>
            </div>

            <div style={{backgroundImage: `url(${cricket})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='flex items-center justify-center flex-col opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Drinking Game app
                        </span>
                        <div className='pt-8 flex text-center'>
                            <a target='_blank' rel="noreferrer" href='https://cricket-psi.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/cricket'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${cricketInfo ? 'info' : 'noShow'}`}>
                                    <p className='text'>{english ? "That's a drinking game that me and my friends are used to playing. We had to always have a pair of dice with us, but now we can play on this app. I've implemented all the functionalities of the game as well, so now there's NO MORE CHEATING" :
                                    "Esse é um jogo de bebida que eu e meus amigos estamos acostumados a jogar. Tínhamos que ter sempre um par de dados conosco, mas agora podemos jogar neste app. Eu também implementei todas as funcionalidades do jogo, então agora não tem como trapacear"}</p>
                                    <button className='btn-close' onClick={() => setCricketInfo(false)} ><AiFillCloseCircle/></button>
                                </div>
                                <button  onClick={() => setCricketInfo(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>+Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${chores})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                <div className='flex items-center justify-center flex-col opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            House Chores app
                        </span>
                        <div className='pt-8 flex text-center'>
                            <a target='blank' rel="noreferrer" href='https://chores-ten.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/chores'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${choresInfo ? 'info' : 'noShow'}`}>
                                    <p className='text'>{english ? 
                                    "I built this project from scratch in order to have an app to help me and my roomates organize our routine better, so I implemented a logic that we can type the current day and we have the chores each one of us is supposed to do this day." : 
                                    "Construí esse projeto do zero para ter um app que ajudasse eu e meus colegas de quarto a organizar melhor nossa rotina, então implementei uma lógica que podemos digitar o dia atual e temos as tarefas que cada um de nós deve fazer neste dia ."}</p>
                                    <button className='btn-close' onClick={() => setChoresInfo(false)} ><AiFillCloseCircle/></button>
                                </div>
                                <button  onClick={() => setChoresInfo(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>+Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    

            <div className='pt-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>{`${english ? 'TUTORIAL PROJECTS' : 'PROJETOS TUTORIAIS'}`}</p>
                <p className='py-6'>{`${english ? 'Projects made from tutorials in order to improve my skills.' : 'Projetos onde eu buscava melhorar minhas habilidades e aprender coisas novas.'}`}</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                
                {/* Grid item */}
                <div style={{backgroundImage: `url(${tikima})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='flex items-center justify-center flex-col opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tik Tok Clone App
                        </span>
                        <div className='pt-8 flex text-center'>
                            <a target='blank' rel="noreferrer" href='https://tikima.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/tikima'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${tikTok ? 'info' : 'noShow'}`}>
                                    <p className='text'>{english ? 
                                    "That's a TikTok clone app that includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more." : 
                                    "Esse é um aplicativo clone do TikTok que inclui Autenticação Google, a capacidade de fazer upload, publicar, compartilhar, comentar e curtir os vídeos; filtragem por categorias e funcionalidades de pesquisa avançada, páginas de perfil, contas sugeridas, design responsivo personalizado e muito mais."}</p>
                                    <button className='btn-close' onClick={() => setTikTok(false)} ><AiFillCloseCircle/></button>
                                </div>
                                <button  onClick={() => setTikTok(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>+Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ecommerce})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='flex items-center justify-center flex-col opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            E-commerce App
                        </span>
                        <div className='pt-8 flex text-center'>
                            <a target='blank' rel="noreferrer" href='https://nike-ecommerce-pied.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/nike-ecommerce'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${ecommerceInfo ? 'info' : 'noShow'}`}>
                                    <p className='text'>{english ? 
                                    "That's a Nike Ecommerce where I implemented advanced State Management of the entire application using React Context API. Next.js Best Practices using server-side rendering and integrationn of Stripe to manage payments." : 
                                    "Esse é um Nike Ecommerce onde implementei o gerenciamento de estado avançado de todo o aplicativo usando React Context API. Práticas recomendadas do Next.js usando Server Side Rendering e integração do Stripe para gerenciar pagamentos."}</p>
                                    <button className='btn-close' onClick={() => setEcommerceInfo(false)} ><AiFillCloseCircle/></button>
                                </div>
                                <button  onClick={() => setEcommerceInfo(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>+Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{backgroundImage: `url(${pablot})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='flex items-center justify-center flex-col opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           My Comercial Website
                        </span>
                        <div className='pt-8 flex text-center'>
                            <a target='blank' rel="noreferrer" href='https://pabllot.github.io/inglescompablot/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/inglescompablot'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${inglesComPablot ? 'info' : 'noShow'}`}>
                                    <p className='text'>{english ? 
                                    "My very first big project, I built a professional website to help me find more students as an English teacher. I used vanilla javascript, css and html on this project." : 
                                    "Meu primeiro grande projeto, construí um site profissional para me ajudar a encontrar mais alunos como professor de inglês. Eu usei vanilla javascript, css e html neste projeto."}</p>
                                    <button className='btn-close' onClick={() => setInglesComPablot(false)} ><AiFillCloseCircle/></button>
                                </div>
                                <button  onClick={() => setInglesComPablot(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>+Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${music})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='flex items-center justify-center flex-col opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Music Player App 
                        </span>
                        <div className='pt-8 flex text-center'>
                            <a target='blank' rel="noreferrer" href='https://spotifine.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/music-player'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${spotify ? 'info' : 'noShow'}`}>
                                    <p className='text'>{english ? 
                                    "On this project I build a music player app similar to spotify with all its funcionalities, it was a great experience and I learned a lot from it" : 
                                    "Neste projeto desenvolvi um aplicativo para escutar música semelhante ao spotify com todas as suas funcionalidades, foi uma ótima experiência e aprendi muito com isso"}</p>
                                    <button className='btn-close' onClick={() => setSpotify(false)} ><AiFillCloseCircle/></button>
                                </div>
                                <button  onClick={() => setSpotify(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>+Info</button>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>        
        </div>
    </div>
  )
}

export default Work