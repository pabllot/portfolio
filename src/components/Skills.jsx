import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Styled from '../assets/styled-components.png';
import Typescript from '../assets/typescript.svg';

import './styles.css'

const Skills = ({english}) => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 py-4'>
        {/* container */}
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>{`${english ? 'Skills' : 'Habiidades'}`}</p>
                <p className='py-4'>{`${english ? 'These are some of the technologies I use the most in my projects.' : 'Essas são as tecnologias que tenho usado em meus projetos'}`}</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={HTML} alt='html icon'/>
                   <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={CSS} alt='html icon'/>
                   <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={JavaScript} alt='html icon'/>
                   <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Typescript} alt='html icon'/>
                   <p className='my-4'>Typescript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={ReactImg} alt='html icon'/>
                   <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Styled} alt='html icon'/>
                   <p className='my-4 text-1xl'>Styled-components</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Node} alt='html icon'/>
                   <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={GitHub} alt='html icon'/>
                   <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills