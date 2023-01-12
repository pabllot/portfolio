import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'
import ReactImg from '../../assets/test.png';




const Home = ({english, setEnglish}) => {
  let shadowEnglish = english ? '0 1px 10px blue' : ''
  let shadowPortuguese = !english ? '0 1px 10px blue' : ''
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <img className='react' src={ReactImg} alt='react icon wrapper'/>
       
        <div className='aligning max-w-[1000px]  mx-auto px- flex flex-col justify-center h-full '>
            <p className='text-pink-600 homep'>{` ${english ? 'Hi, welcome to my portfolio. My name is' : 'Olá, bem vindo ao meu portifólio, meu nome é'}`}</p>
            <h1 className='homeh1 text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Pablo Teixeira</h1>
            <h2 className='homeh2 text-4xl sm:text=7xl font-bold text-[#8892b0]'>{`${english ? 'Please take a look around' : 'Fique à vontade'}`}</h2>            
            <Link to='work' smooth={true} duration={500}>
            <div>
                <button className=' btnm text-white text-2xl group border-2 px-3 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                      {`${english ? 'View Projects' : 'Ver Projetos'}`}
                  <span className='group-hover:rotate-90 duration-300'><FaArrowRight className='ml-3'/></span> </button>
            </div>
            </Link>
            <div className='lang-wrapper'>
              <div className='lang' style={{boxShadow: shadowPortuguese}}  onClick={()=>setEnglish(false)}>Português</div>
              <div className='lang' style={{boxShadow: shadowEnglish}} onClick={()=>setEnglish(true)}>English</div>
            </div>
        </div>
    </div>
  )
}

export default Home