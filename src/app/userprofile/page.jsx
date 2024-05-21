import React from 'react';
import UploadAndDisplayImage from '../../components/UploadAndDisplayImage';
import UserProfileNav from '../../components/UserProfileNav';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';


////Check how many fosters, this user has and add more fostercards as necessary

export default async function UserProfilePage() {
    
  const session = await getServerSession(options);

  return (
    <div className='flex-1 shadow-xl bg-white rounded-lg p-8'>
      <h2 className='text-xl text-left'>Your Account</h2>
      { session ?
        <> 
         
                <UserProfileNav user={session.user} />
                
              {/* Avatar Image only for cred users */}
              { session.user.image
                ? null 
                :  <UploadAndDisplayImage/>
              }
              <p className='italic text-center font-medium'>Account Type: {session.user.role}</p>
        </>
        : null
      }
      
    </div>
  )
}