// 'use client'
// import React, { useState } from 'react';
import React from 'react';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import UploadAndDisplayImage from '../../components/UploadAndDisplayImage'



////Check how many fosters, this user has and add more fostercards as necessary

export default async function DashboardPage() {
    
    const session = await getServerSession(options);


  return (
    <div>

      { session ?
        <>
        <div className='flex-column content-center justify-center bg-white px-48 py-10 rounded-lg border border-gray-400 '>
          <h2 className='text-xl text-center'>Your Profile</h2><br/>
            <div className='flex flex-1 justify-center content-center'>
                <form>
                  <UploadAndDisplayImage/>

                    {/* Display Name */}
                    <label htmlFor='display_name' >Display Name </label><br/>
                    <input type="text" name="display_name" id="display_name" placeholder={ session.user.name }  className='text-center border border-gray-900 rounded-md py-1'/>
                    {/* Account Name */}
                    <br/><br/>
                    <label htmlFor='name'>Name </label><br/>
                    <input type="text" name="name" id="name" placeholder={ session.user.name } className='text-center border border-gray-900 rounded-md py-1'/>
                    
                    {/* Account Settings for credential users */}
                    { session.user.role == 'Cred User' 
                      ? <>
                        <br/><br/> <br/><br/>
                        <label htmlFor='name'>Password </label><br/>
                        <input type="password" name="password" id="password" className='text-center border border-gray-900 rounded-md py-1'/>

                        <br/><br/>
                        <label htmlFor='name'>Confirm Password </label><br/>
                        <input type="password" name="confirm_password" id="confirm_password" className='text-center border border-gray-900 rounded-md py-1'/>
                        </>
                      : null

                    }
                    {/* Account Type */}
                    <br/><br/><br/>
                    <label>Account Type: { session.user.role }</label>
                    {/* Submit Account Changes */}
                    <br/><br/><br/>
                    <div className='text-center'>
                      <button className="px-8 py-2 bg-emerald rounded-lg" type="submit">Save Changes
                      </button>
                    </div>
                    
                </form>
            </div>
          </div>
        </>
        : null
      }
      
    </div>
  )
}