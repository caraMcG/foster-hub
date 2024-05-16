"use client"
import React, { useState } from 'react';
import UserProfileForm from '../components/UserProfileForm';
import UserAvailabiltyForm from '../components/UserAvailabiltyForm';

const UserProfileNav =  (props) => {

    const [profilePage, setProfilePage] = useState("Profile");
    let userSession = props.user;

    function handleClick(e){
        e.preventDefault();
        let profileLink = e.target.innerText;
        setProfilePage(profileLink);
    }
    // bg-gray-200 h-12 px-4 rounded-md
  return ( 
    <>
     <h2 className='text-xl text-left'>Your Account</h2>
        <header>
            <nav className='flex items-center justify-center px-14 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-300' aria-label='Global'>
                <div className="flex gap-14 items-center"> 
                    <ul className="flex">
                        <li className="flex-1 mr-2">
                            {/* <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Active Item</a> */}
                           <a className={`${profilePage == "Profile" ? " bg-emerald" : "bg-gray-200"} text-center block border rounded-sm py-2 px-4 hover:bg-mint text-black`} href="#" onClick={(e)=>{handleClick(e)}}>Profile</a>
                        </li>
                        <li className="flex-1 mr-2">
                            <a className={`${profilePage == "Availability" ? "bg-emerald transition-colors duration-75" : "bg-gray-200" } text-center block border border-gray-900 rounded-sm py-2 px-4 hover:bg-mint text-black`} href="#" onClick={(e)=>{handleClick(e)}}>Availability</a>
                        </li>
                        <li className="flex-1">
                        <a className={`${profilePage == "Notifications" ? "bg-emerald" : "bg-gray-200" } text-center block border border-gray-900 rounded-sm py-2 px-4 hover:bg-mint text-black`} href="#" onClick={(e)=>{handleClick(e)}}>Notifications</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <>
            { profilePage === "Profile"
                ? < UserProfileForm  user={userSession} />
                : < UserAvailabiltyForm  />
            }      
        </>
    </>
  )
}
export default UserProfileNav