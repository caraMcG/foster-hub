import React from 'react';
import UploadAndDisplayImage from '../../components/UploadAndDisplayImage';
import UserProfileForm from '../../components/UserProfileForm';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';


////Check how many fosters, this user has and add more fostercards as necessary

export default async function UserProfilePage() {
    
  const session = await getServerSession(options);


  return (
    <div>

      { session ?
        <>
        <div className='flex-column content-center justify-center bg-white px-48 py-10 rounded-lg border border-gray-400 '>
          <h2 className='text-xl text-center'>Your Profile</h2><br/>
            <div className='flex flex-1 justify-center content-center'>
                
              {/* Avatar Image only for cred users */}
              { session.user.image
                ? null 
                :  <UploadAndDisplayImage/>
              }

              < UserProfileForm user={session} />
                 
                   
            </div>
          </div>
        </>
        : null
      }
      
    </div>
  )
}