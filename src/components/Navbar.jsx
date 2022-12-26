import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [hamburguer, setHamburguer] = useState(false)
    const handleClick = () => setHamburguer(prev => !prev)

  return (
    <div className='fixed w-screen h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo' style={{width: '50px'}}/>
        </div>

        {/* menu */}
    
        <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            
        </ul>

        {/* Hamburguer */}
        <div onClick={handleClick} className='md:hidden z-20'>
            { hamburguer ? <FaTimes /> : <FaBars /> }
        </div>
        {/* mobile menu */}
        <ul className={hamburguer ? 'absolute z-10 top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
            <li className='py-2 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-2 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-2 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-2 text-4xl'>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-2 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/pablo-teixeira-466497238/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noreferrer" href='https://github.com/pabllot'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noreferrer" href='https://www.instagram.com/inglescompablot/'>
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
              
            </ul>
        </div>
    </div>
  )
}

export default Navbar