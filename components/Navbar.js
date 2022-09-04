import React from 'react'
import Mypic from '../public/logo.svg' 
import Link from 'next/link'

const Navbar = () => {
    const color = 'transparent'
    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className='fixed top-0 w-full z-10 ease-in duration-300 box'
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <img className='logo' src='/logo.svg' alt=''/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar