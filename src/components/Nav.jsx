import Link from 'next/link';
import Image from 'next/image'
import Logo from '../app/assets/paw-solid.svg';
import React from 'react';
import { getServerSession } from 'next-auth';
import { options } from '../app/api/auth/[...nextauth]/options';
import UserCard from './UserCard';


const Nav = async () => {

  const session = await getServerSession(options);

  return (
      <header >
        {/* className="bg-white" */}
          {/* <nav className='flex items-center justify-between p-6 lg:px-8 h-16 border border-t-0 border-l-0 border-r-0 border-b-gray-300' aria-label='Primary navigation'> */}
        <nav className='flex items-center justify-between p-6 lg:px-8 h-24' aria-label='Primary navigation'>
            <div className={`${session ? 'justify-around' : 'justify-between'} flex flex-1 items-center px-10`}> 
              
              <Image 
              src = {Logo}
              width="45"
              height="45" 
              className="max-w-none aspect-auto rotate-12 self-left"
              quality={100}
              draggable = 'false'
              alt= "Logo"/>

              { session ? 
                  <>
                    <Link href="/" className='mainlink group/home font-semibold text-xl'>Home
                      <span className="mt-0.5 block max-w-0 group-hover/home:max-w-full transition-all duration-500 h-1 bg-indigo-500"></span>
                    </Link>
                    <Link href="/dashboard" className='mainlink group/dash font-semibold text-xl'>Dashboard
                      <span className="mt-0.5 block max-w-0 group-hover/dash:max-w-full transition-all duration-500 h-1 bg-indigo-500"></span>
                    </Link>
                    <Link href="/requests" className='mainlink group/req font-semibold text-xl'>Requests
                      <span className="mt-0.5 block max-w-0 group-hover/req:max-w-full transition-all duration-500 h-1 bg-indigo-500"></span>
                    </Link>
                    {session.user.role === "admin" 
                    ? <Link href="/admin" className='mainlink group/admin font-semibold text-xl'>Admin
                        <span className="mt-0.5 block max-w-0 group-hover/admin:max-w-full transition-all duration-500 h-1 bg-indigo-500"></span>
                      </Link>
                    : null
                    }
 
                    <UserCard user={ session.user }/>
                    
                  </>
                  : <Link className="border px-10 py-3 rounded-lg font-bold bg-mint hover:bg-emerald" href="/api/auth/signin?callbackUrl=/dashboard">Login</Link>
              }

            </div>
        </nav>
    </header>
  )
}
export default Nav