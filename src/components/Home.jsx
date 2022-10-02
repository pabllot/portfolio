import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px- flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Pablo Teixeira</h1>
            <h2 className='text-4xl sm:text=7xl font-bold text-[#8892b0]'>I'm a full Stack Software Developer</h2>            
            <div>
                <button className='text-white text-2xl group border-2 px-3 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                  <Link to='work' smooth={true} duration={500}>
                      View Work
                  </Link>
                  <span className='group-hover:rotate-90 duration-300'><FaArrowRight className='ml-3'/></span> </button>
            </div>
        </div>
    </div>
  )
}

export default Home