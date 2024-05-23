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
            <h2 className='text-xl text-center mb-10'>Your Account Info</h2> 
            <nav className='flex items-center justify-center px-14 h-12 border border-t-0 border-l-0 border-r-0 border-b-gray-300' aria-label='Global'>
                <div className="flex gap-14 items-center drag-none"> 
                    <ul className="flex gap-12 drag-none">
                        <li className="flex-1 mr-2 drag-none">
                            <a className='font-semibold group transition duration-300 text-center rounded-sm py-2 px-4 text-black drag-none' href="#" onClick={(e)=>{handleClick(e)}}>Availability
                                <span className={`mt-1.5 block ${profilePage === 'Availability' ? "max-w-full" : "max-w-0 group-hover:max-w-full"} transition-all duration-500 h-1 bg-btnsecond`}></span>
                            </a>
                        </li>

                        <li className="flex-1 mr-2">
                            <a className='font-semibold group transition duration-300 text-center rounded-sm py-2 px-4 text-black drag-none' href="#" onClick={(e)=>{handleClick(e)}}>Account
                                <span className={`mt-1.5 block ${profilePage === 'Account' ? "max-w-full" : "max-w-0 group-hover:max-w-full"} transition-all duration-500 h-1 bg-btnsecond`}></span>
                            </a>
                        </li>
                        {/* <li className="flex-1">
                            <a className='font-semibold group transition duration-300 text-center rounded-sm py-2 px-4 text-black drag-none' href="#" onClick={(e)=>{handleClick(e)}}>Notifications
                                <span className={`block ${profilePage === 'Notifications' ? "max-w-full" : "max-w-0 group-hover:max-w-full"} transition-all duration-500 h-0.5 bg-btnsecond`}></span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
        {/* h-[600px] */}
        <section className='flex flex-col justify-center items-center py-8 h-[600px] w-full'>
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