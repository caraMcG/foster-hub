"use client"
import React, { useState } from 'react';
import UserProfileForm from '../components/UserProfileForm';
import UserAvailabiltyForm from '../components/UserAvailabiltyForm';

const UserProfileNav =  (props) => {

    const [profilePage, setProfilePage] = useState("Availability");
    let userSession = props.user;

    function handleClick(e){
        e.preventDefault();
        let profileLink = e.target.innerText;
        setProfilePage(profileLink);
    }
    // bg-gray-200 h-12 px-4 rounded-md
  return ( 
    <>
        <header>
            <nav className='flex items-center justify-center px-14 h-12 border border-t-0 border-l-0 border-r-0 border-b-gray-300' aria-label='Global'>
                <div className="flex gap-14 items-center drag-none"> 
                    <ul className="flex drag-none">
                        <li className="flex-1 mr-2 drag-none">
                            <a className={`${profilePage == "Availability" ? "bg-emerald" : "bg-gray-200" } text-center block border rounded-sm py-2 px-4 hover:bg-mint text-black drag-none`} href="#" onClick={(e)=>{handleClick(e)}}>Availability</a>
                        </li>
                        <li className="flex-1 mr-2">
                            <a className={`${profilePage == "Account" ? " bg-emerald" : "bg-gray-200"} text-center block border rounded-sm py-2 px-4 hover:bg-mint text-black drag-none`} href="#" onClick={(e)=>{handleClick(e)}}>Account</a>
                        </li>
                        <li className="flex-1">
                            <a className={`${profilePage == "Notifications" ? "bg-emerald" : "bg-gray-200" } text-center block border rounded-sm py-2 px-4 hover:bg-mint text-black drag-none`} href="#" onClick={(e)=>{handleClick(e)}}>Notifications</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        {/* h-[600px] */}
        <section className='h-full flex flex-col justify-center py-8 h-[660px]'>
            <div className='flex-1 self-center'>
                <p className='text-center'><span className='text-red-600'>*</span> required fields</p>
            </div> 
                { profilePage === "Account"
                    
                    ? < UserProfileForm  user={userSession} />
                    : < UserAvailabiltyForm  />
                }
           
        </section>
    </>
  )
}
export default UserProfileNav;