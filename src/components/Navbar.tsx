import Link from 'next/link';
import React from 'react'
import { RiMenu4Line } from "react-icons/ri";
Link

function Navbar() {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Amber Rasheed</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink'><Link href='/'>Home</Link></li>
            <li className='menuLink'><Link href='about'>About</Link></li>
            <li className='menuLink'><Link href='/projects'>Projects</Link></li>
            <li className='menuLink'><Link href='skills'>Skills</Link></li>
            <li className='menuLink'><Link href='contact'>Contact</Link></li>
        </ul>
        <RiMenu4Line className='md:hidden'size={30} />
      
      </div>
    </div>
  )
}

export default Navbar
