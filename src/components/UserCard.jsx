'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const UserMenu = () => (
  <div>
    <Link 
      className="block font-semibold text-textdark px-8 py-2 hover:bg-softblue hover:font-bold  hover:rounded-t-lg" 
      href="/userprofile">Profile</Link>
    <Link 
      className="block font-semibold text-textdark px-8 py-2 hover:bg-softblue hover:font-bold hover:rounded-b-lg" 
      href="/api/auth/signout?callbackUrl=/">Logout</Link>
  </div>
)

const UserCard = ( props ) => {

  const [toggleMenu, setToggleMenu] = useState(false);

  let name = props.user.name;
  let image = props.user.image; 

  return (
    <div className="flex flex-col items-center justify-evenly">
      <FontAwesomeIcon icon={faBell} size="xl" className='mr-32 cursor-pointer' style={{color: "#c0c0c0",}} /> 

      <div className='absolute'>    
          { image ? 
                <Image 
                src = {image} 
                width="50"
                height="50" 
                className="max-w-none aspect-auto rounded-full cursor-pointer"
                quality={100}
                // objectFit= "contain"
                draggable = 'false'
                onClick ={() => setToggleMenu(!toggleMenu)}
                alt= {`${name}'s Clickable Picture`}/>
            : null
          }
          {/* <span className="p-3">{name}</span> */}
       
      </div>
     
      <div className="absolute z-50 mt-40 bg-btnsecond rounded-lg shadow-xl" onClick ={() => setToggleMenu(!toggleMenu)}> 
          { toggleMenu && (
            <>
              <div className='triangle'></div>
              <UserMenu/>
            </>
          )}
      </div>
    </div>
  )
}

export default UserCard