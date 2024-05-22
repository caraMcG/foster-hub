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
                            <a className={`${profilePage == "Availability" ? "bg-mint" : "bg-gray-200" } text-center block border rounded-sm py-2 px-4 hover:bg-emerald text-black drag-none`} href="#" onClick={(e)=>{handleClick(e)}}>Availability</a>
                        </li>
                        <li className="flex-1 mr-2">
                            <a className={`${profilePage == "Account" ? " bg-mint" : "bg-gray-200"} text-center block border rounded-sm py-2 px-4 hover:bg-emerald text-black drag-none`} href="#" onClick={(e)=>{handleClick(e)}}>Account</a>
                        </li>
                        <li className="flex-1">
                            <a className={`${profilePage == "Notifications" ? "bg-mint" : "bg-gray-200" } text-center block border rounded-sm py-2 px-4 hover:bg-emerald text-black drag-none`} href="#" onClick={(e)=>{handleClick(e)}}>Notifications</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        {/* h-[600px] */}
        <section className='flex flex-col justify-center items-center py-8 h-[600px]'>
            <div className='flex-1 mb-6 grow-0 text-center '>
                <p className=''><span className='text-red-600'>*</span> required fields</p>
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