import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center px-15 py-4 bg-transparent text-white'>
            <div className='flex space-x-8 text-xl'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/course">Course</Link>
            </div>
            <h1 className='font-bold text-xl'>Smart Academy</h1>
            <Button>Explore Course</Button>
    </nav>
  )
}

export default Nav