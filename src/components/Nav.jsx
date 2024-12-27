import Link from 'next/link';
import React from 'react';
import { getServerSession } from 'next-auth';
import { options } from '../app/api/auth/[...nextauth]/options';
import UserCard from './UserCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';


const Nav = async () => {

  const session = await getServerSession(options);

  return (
      // <header className={`${session ? "bg-base_black" : null } `}> text-textwhite (for links below)
      <header className={`${session ? "bg-white border-b border-slate-300 shadow" : null } `}>
        <nav className='flex items-center justify-between p-6 lg:px-8 h-20' aria-label='Primary navigation'>
            <div className={`${session ? 'justify-around' : 'justify-between'} flex flex-1 items-center px-10`}> 
             <FontAwesomeIcon icon={faPaw} style={{color: "#457B9D",}} className='w-14 rotate-12 self-left fa-3x'/>

              { session ? 
                  <>
                    <Link href="/userHome" className='mainlink group/home font-semibold text-xl '>Home
                      <span className="mt-0.5 block max-w-0 group-hover/home:max-w-full transition-all duration-500 h-1 bg-btnprimary"></span>
                    </Link>
                    <Link href="/dashboard" className='mainlink group/dash font-semibold text-xl '>Dashboard
                      <span className="mt-0.5 block max-w-0 group-hover/dash:max-w-full transition-all duration-500 h-1 bg-btnprimary"></span>
                    </Link>
                    <Link href="/requests" className='mainlink group/req font-semibold text-xl '>Requests
                      <span className="mt-0.5 block max-w-0 group-hover/req:max-w-full transition-all duration-500 h-1 bg-btnprimary"></span>
                    </Link>
                    {session.user.role === "admin" 
                    ? <Link href="/admin" className='mainlink group/admin font-semibold text-xl '>Admin
                        <span className="mt-0.5 block max-w-0 group-hover/admin:max-w-full transition-all duration-500 h-1 bg-btnprimary"></span>
                      </Link>
                    : null
                    }
                    
                  <UserCard user={ session.user }/>                    
                    
                  </>
                  : <Link className="px-10 py-3 rounded-lg font-bold bg-btnprimary text-white hover:bg-btnhoverp" href="/api/auth/signin?callbackUrl=/userHome">Login</Link>
              }
            </div>
          
          
        </nav>
        {/* <div className='w-5/6 mx-auto'>
          <hr className="border-t border-gray-700" />
        </div> */}
        
    </header>
  )
}
export default Nav