import React from 'react'

const About = ({english}) => {
    
  return (
    <div name='about' className='w-full h-[600px] bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>{`${english ? 'About' : 'Sobre'}`}</p>
                </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 flex justify-center'>                    
                    <div className='w-[600px]'>
                        <p>{`${english ? "I'm 25 years old, an easy-going person, passionate about programming and eager to learn more and more every day. Former online English teacher, still teach some private students to have some extra money by the end of the month, alongside with frontend freelances. Over the last few months I've been freelancing for a GTA-V RolePlay server group and it's been a great experience, but I feel like it's time to land a full time job." : 'Tenho 25 anos, uma pessoa descontraída, apaixonada por programação e com vontade de aprender cada dia mais. Ex-professor de inglês online, ainda ensino alguns alunos particulares para ter uma grana extra no final do mês, junto com freelances de frontend. Nos últimos meses, trabalhei como freelancer para um grupo de servidores GTA-V RolePlay e tem sido uma ótima experiência, mas sinto que é hora de conseguir um emprego em tempo integral.'}`}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About

