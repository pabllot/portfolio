import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-[700px] bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 flex justify-center'>                    
                    <div className='w-[600px]'>
                        <p>I'm 25 years old, an easy-going person, passionate about programming and eager to learn more and more every day. Former online English teacher, still teach some private students to have some extra money by the end of the month, alongside with frontend freelances. Over the last few months I've been freelancing for a GTA-V RolePlay server group and it's been a great experience, but I feel like it's time to land a full time job.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About