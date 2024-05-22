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
        <div className='flex-1 shadow-xl bg-white rounded-lg p-8'>
          <h2 className='text-xl text-left mb-6'>Requests Page</h2>
          
          <section className='flex flex-col justify-center items-center py-8'>
            <div className='flex-1 mb-6 grow-0 text-center '>
                  <p className=''>Placeholder info here hi</p>
              </div> 
          </section>
              
        </div>
        </>
        : null
      }
      
    </div>
  )
}