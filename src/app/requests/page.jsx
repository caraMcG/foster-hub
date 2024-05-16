import React from 'react';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';


////Check how many fosters, this user has and add more fostercards as necessary

export default async function RequestsPage() {
    
  const session = await getServerSession(options);

  return (
    <div>
      { session ?
        <>
        <div className='bg-white px-48 py-10 rounded-lg border border-gray-400 '>
          <h2 className='text-xl text-center'>Requests Page</h2><br/>
              
        </div>
        </>
        : null
      }
      
    </div>
  )
}