'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const UserProfileForm = (props) => {
    const [checkboxArray, setCheckboxArray] = useState([]); 
    let userSession = props.user;

    const checkForm= () => {

    }

    return (
     <> 
     <div className='flex h-full flex-col justify-between h-full max-w-md'>
        <form className='flex flex-col flex-grow'>
            <fieldset>
                <legend className='hidden'></legend>
                {/* Profile Name */}
                <div className='mb-2'>
                    <label htmlFor='accountname' className='block font-semibold mb-2'>Name </label>
                    <input type="text" 
                            name="name" 
                            id="accountname"  
                            placeholder={userSession.name}
                            defaultValue={userSession.name} 
                            className='text-black shadow-md appearance-none border border-gray-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-teal-600 focus:ring-2 focus:ring-opacity-75'/>
                </div>

                {/* Account Email */}
                <div className='relative mb-2'>
                    <label htmlFor='accountemail' className='block font-semibold mb-2'>Email </label>
                    <input type="email" 
                            name="email" 
                            id="accountemail"  
                            placeholder={userSession.email}  
                            className='peer/email text-black shadow-md appearance-none border border-gray-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-teal-600 focus:ring-2 focus:ring-opacity-75'/>
                    <p className="absolute invisible peer-invalid/email:visible text-pink-600 text-sm">Please provide a valid email address.</p>
                </div>

                {/* Password Changes */}
                {/* { session.user.role == 'Cred User' 
                    ? <> */}
                <div className='mb-2'>
                    <label htmlFor='accountpassword' className='block font-semibold mb-2'>Password <span className='text-red-600'>*</span></label>
                    <input type="password" 
                            name="password" 
                            id="accountpassword" 
                            className='text-black shadow-md appearance-none border border-gray-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-teal-600 focus:ring-2 focus:ring-opacity-75'/>
                </div>

                <div className='mb-2'>
                    {/* add eyeball foor show password */}
                    <label htmlFor='confirmpassword' className='block font-semibold mb-2'>Confirm Password <span className='text-red-600'>*</span> </label>
                    <input type="password" 
                            name="confirmpass" 
                            id="confirmpassword" 
                            className='text-black shadow-md appearance-none border border-gray-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-teal-600 focus:ring-2 focus:ring-opacity-75'/>
                    {/* <p>
                        <FontAwesomeIcon role="img" icon={faCircleExclamation} size="sm" style={{color: "rgb(220 38 38)",}} />  Passwords do not match
                    </p> */}
                    {/* </>
                    : null
                } */}
                </div>
            </fieldset>

            {/* Submit Changes */}
            <div className='mt-auto text-center '>
                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-600 rounded-lg text-center text-white font-semibold" type="submit">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
    </>
  );
};

export default UserProfileForm;