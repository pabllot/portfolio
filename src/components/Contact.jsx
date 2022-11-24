import React from 'react'

import './styles.css'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-[900px] bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/2a68a64b-b315-46eb-85b7-b06de7ae91d0' className=' flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email at pabllot07@outlook.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Your name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Your email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' placeholder='Your message' rows='10'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact