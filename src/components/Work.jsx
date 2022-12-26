import React from 'react'
import tikima from '../assets/tikima.png'
import ecommerce from '../assets/ecommerce.png'
import chores from '../assets/chores.png'
import pablot from '../assets/pablot.png'
import music from '../assets/music.png'
import video from '../assets/video.png'
import hw from '../assets/hw.png'
import cricket from '../assets/cricket.png'
import './styles.css'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'

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
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           Video Player app
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='blank' rel="noreferrer" href='https://next-desafio-video.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            {/*<a target='blank'  rel="noreferrer" href='https://github.com/pabllot/next-desafio-video'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>*/}
                            <div>
                                <div className={`${videoPlayer ? 'info' : 'noShow'}`}>
                                    <p className='text'>UNDER DEVELOPMENTT, DESCRIPTION COMING IN A FEW DAYS</p>
                                    <button className='btn-close' onClick={() => setVideoPlayer(false)} ><GrClose/></button>
                                </div>
                                <button  onClick={() => setVideoPlayer(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Info</button>
                            </div>
                        </div>
                    </div>
                </div>

            <div style={{backgroundImage: `url(${hw})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            English practice app
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='blank' rel="noreferrer" href='https://inglescompabloth.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/homework/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${engilshPractice ? 'info' : 'noShow'}`}>
                                    <p className='text'>UNDER DEVELOPMENTT, DESCRIPTION COMING IN A FEW DAYS</p>
                                    <button className='btn-close' onClick={() => setEngilshPractice(false)} ><GrClose/></button>
                                </div>
                                <button  onClick={() => setEngilshPractice(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Info</button>
                            </div>
                           
                        </div>
                    </div>
            </div>

            <div style={{backgroundImage: `url(${cricket})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Drinking Game app
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' rel="noreferrer" href='https://cricket-psi.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/cricket'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${cricketInfo ? 'info' : 'noShow'}`}>
                                    <p className='text'>UNDER DEVELOPMENTT, DESCRIPTION COMING IN A FEW DAYS</p>
                                    <button className='btn-close' onClick={() => setCricketInfo(false)} ><GrClose/></button>
                                </div>
                                <button  onClick={() => setCricketInfo(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${chores})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            House Chores app
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='blank' rel="noreferrer" href='https://chores-ten.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/chores'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${choresInfo ? 'info' : 'noShow'}`}>
                                    <p className='text'>UNDER DEVELOPMENTT, DESCRIPTION COMING IN A FEW DAYS</p>
                                    <button className='btn-close' onClick={() => setChoresInfo(false)} ><GrClose/></button>
                                </div>
                                <button  onClick={() => setChoresInfo(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Info</button>
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
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tik Tok Clone App
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='blank' rel="noreferrer" href='https://tikima.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/tikima'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${tikTok ? 'info' : 'noShow'}`}>
                                    <p className='text'>UNDER DEVELOPMENTT, DESCRIPTION COMING IN A FEW DAYS</p>
                                    <button className='btn-close' onClick={() => setTikTok(false)} ><GrClose/></button>
                                </div>
                                <button  onClick={() => setTikTok(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ecommerce})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            E-commerce App
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='blank' rel="noreferrer" href='https://nike-ecommerce-pied.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/nike-ecommerce'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${ecommerceInfo ? 'info' : 'noShow'}`}>
                                    <p className='text'>UNDER DEVELOPMENTT, DESCRIPTION COMING IN A FEW DAYS</p>
                                    <button className='btn-close' onClick={() => setEcommerceInfo(false)} ><GrClose/></button>
                                </div>
                                <button  onClick={() => setEcommerceInfo(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{backgroundImage: `url(${pablot})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           My Comercial Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='blank' rel="noreferrer" href='https://pabllot.github.io/inglescompablot/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/inglescompablot'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${inglesComPablot ? 'info' : 'noShow'}`}>
                                    <p className='text'>UNDER DEVELOPMENTT, DESCRIPTION COMING IN A FEW DAYS</p>
                                    <button className='btn-close' onClick={() => setInglesComPablot(false)} ><GrClose/></button>
                                </div>
                                <button  onClick={() => setInglesComPablot(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${music})`}} className='relative shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Music Player App 
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='blank' rel="noreferrer" href='https://spotifine.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='blank' rel="noreferrer" href='https://github.com/pabllot/music-player'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div>
                                <div className={`${spotify ? 'info' : 'noShow'}`}>
                                    <p className='text'>UNDER DEVELOPMENTT, DESCRIPTION COMING IN A FEW DAYS</p>
                                    <button className='btn-close' onClick={() => setSpotify(false)} ><GrClose/></button>
                                </div>
                                <button  onClick={() => setSpotify(true)} className='close text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Info</button>
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