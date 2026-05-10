import React from 'react'
import logo from '../assets/netflix.png'

const navbar = () => {
  return (
    <nav className='flex items-center justify-items-center justify-between bg-transparent absolute w-full px-30 z-10'>
        <img src={logo} alt="Netflix" className='w-24 h-24' />
        <button className='bg-red-500 text-white px-4 py-2 rounded'>Sign In</button>
    </nav>
  )
}

export default navbar