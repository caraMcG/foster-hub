import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
        <div className='flex flex-row gap-20 flex-wrap justify-evenly mt-16 p-12 bg-bluedark text-textwhite'>
            <div className='flex-2 text-left '>
                <ul>
                    <li className='mb-2'>
                        <Link href="" className="hover:text-links">Register</Link>
                    </li>
                    <li className='mb-2'>
                        <Link href="/api/auth/signin?callbackUrl=/dashboard" className="hover:text-links">Login</Link>
                    </li>
                </ul>
            </div>
            <div className='flex-2'>
                <ul>
                    <li className='mb-2'>
                        Made with ❤ by Cara
                    </li>
                </ul>
            </div>
            <div className='flex-2 text-left'>
                <ul>
                    <li className='mb-2'>
                        <Link href="" className="hover:text-links">About</Link>
                    </li>
                    <li className='mb-2'>
                        <Link href="https://github.com/caraMcG/foster-hub" target='_blank' className="hover:text-links">GitHub</Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer