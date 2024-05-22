import React from 'react';
import UploadAndDisplayImage from '../../components/UploadAndDisplayImage';
import UserProfileNav from '../../components/UserProfileNav';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';


////Check how many fosters, this user has and add more fostercards as necessary

export default async function UserProfilePage() {
    
  const session = await getServerSession(options);

  return (
    <div>

        { session ?
          <>  
              <div className='flex-1 shadow-xl bg-white rounded-lg px-12 py-8'>
                {/* <div className='flex-1 self-center w-full'> */}
                  
                <UserProfileNav user={session.user} />
                  
                {/* Avatar Image only for cred users */}
                { session.user.image
                  ? null 
                  :  <UploadAndDisplayImage/>
                }
                <p className='italic text-center font-medium'>Account Type: {session.user.role}</p>
              </div>
          </>
          : null
    
        }
        {/* </div> */}
  
    </div>
  )
}