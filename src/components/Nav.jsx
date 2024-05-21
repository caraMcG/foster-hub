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
    // <header className='bg-base_black text-magnolia'>
      <header className="bg-white">
        <nav className='flex items-center justify-between p-6 lg:px-8 h-16 border border-t-0 border-l-0 border-r-0 border-b-gray-300' aria-label='Primary navigation'>
            <div className="flex flex-1 justify-between items-center px-10"> 
              
              <Image 
              src = {Logo}
              width="45"
              height="45" 
              className="max-w-none aspect-auto rotate-12"
              quality={100}
              draggable = 'false'
              alt= "Logo"/>

              { session ? 
                  <>
                    <Link href="/">Home</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/requests">Requests</Link>
                    {session.user.role === "admin" 
                    ? <Link href="/admin">Admin</Link>
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