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
    <div className='flex flex-column justify-center'>
        <form className='py-10 mb-4'>

            <p><span className='text-red-600'>*</span> required fields</p><br/>
            
            {/* Profile Name */}
            <div className='mb-4'>
                <label htmlFor='name' className='block font-semibold mb-2'>Name </label>
                <input type="text" 
                        name="name" 
                        id="name"  
                        placeholder={userSession.name}
                        defaultValue={userSession.name} 
                        className='text-center text-black shadow-md appearance-none border border-gray-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-teal-600 focus:ring-2 focus:ring-opacity-75'/>
            </div>

            {/* Account Email */}
            <div className='mb-4'>
                <label htmlFor='email' className='block font-semibold mb-2'>Email </label>
                <input type="email" 
                        name="email" 
                        id="email"  
                        placeholder={userSession.email}  
                        className='peer/email text-center text-black shadow-md appearance-none border border-gray-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-teal-600 focus:ring-2 focus:ring-opacity-75'/>
                <p className="mt-2 invisible peer-invalid/email:visible text-pink-600 text-sm">
                Please provide a valid email address.
                </p>
            </div>

            {/* Password Changes */}
            {/* ADD EYEBALL TO PASSWORD FORM */}
            {/* { session.user.role == 'Cred User' 
                ? <> */}
            <div className='mb-4'>
                <label htmlFor='name' className='block font-semibold mb-2'>Password <span className='text-red-600'>*</span></label>
                <input type="password" 
                        name="password" 
                        id="password" 
                        className='text-center text-black shadow-md appearance-none border border-gray-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-teal-600 focus:ring-2 focus:ring-opacity-75'/>
            </div>

            <div className='mb-6'>
                {/* add eyeball foor show password */}
                <label htmlFor='name' className='block font-semibold mb-2'>Confirm Password <span className='text-red-600'>*</span> </label>
                <input type="password" 
                        name="confirm_password" 
                        id="confirm_password" 
                        className='text-center text-black shadow-md appearance-none border border-gray-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-teal-600 focus:ring-2 focus:ring-opacity-75'/>
                <p>
                    <FontAwesomeIcon icon={faCircleExclamation} size="sm" style={{color: "rgb(220 38 38)",}} />  Passwords do not match
                </p>
                {/* </>
                : null
            } */}
            </div>

            {/* Submit Changes */}
            <div className='text-center pt-16'>
                <button className="px-8 py-4 bg-emerald rounded-lg" type="submit">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
  );
};

export default UserProfileForm;