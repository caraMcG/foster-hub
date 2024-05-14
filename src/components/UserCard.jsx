'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'

const UserMenu = () => (
  <div className=''>
    <Link className="block px-8 py-2 hover:bg-emerald hover:rounded-t-lg" href="/userprofile">Profile</Link>
    <Link className="block px-8 py-2 font-bold hover:bg-emerald hover:rounded-b-lg" href="/api/auth/signout?callbackUrl=/">Logout</Link>
  </div>
)

const UserCard = ( props ) => {

  const [toggleMenu, setToggleMenu] = useState(false);

  let name = props.user.name;
  let image = props.user.image; 

  return (
    <div className="flex flex-col items-center justify-evenly">
      <div className='absolute'>     
          { image ? 
                <Image 
                src = {image} 
                width="50"
                height="50" 
                className="max-w-none aspect-auto rounded-full cursor-pointer"
                quality={100}
                objectFit= "contain"
                draggable = 'false'
                onClick ={() => setToggleMenu(!toggleMenu)}
                alt= {`${name}'s Picture`}/>
            : null
          }
          {/* <span className="p-3">{name}</span> */}
       
      </div>
     
      <div className="absolute z-50 mt-40 bg-mint rounded-lg hover:triangle.bg-emerald"> 
          { toggleMenu && (
              <>
                <div className='triangle'> </div>
                <UserMenu/>
              </>  
          )}
      </div>
    </div>
  )
}

export default UserCard