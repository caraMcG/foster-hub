import React from 'react';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import FosterCard from '../../components/FosterCard';
import { redirect } from 'next/dist/server/api-utils';


////Check how many fosters, this user has and add more fostercards as necessary

export default async function DashboardPage() {
  
  const session = await getServerSession(options);

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/dashboard")
  }

  return (
    <div>

      { session ?
        <>
          <p className='py-5 text-center'>Hello { session.user.name },<br/>Welcome to your Dashboard!</p>
          <h2 className='mx-10 py-2 text-xl'>Current Fosters</h2><br/>
          <section className='flex flex-wrap justify-center gap-4 my-10'>
            <FosterCard/>
            <FosterCard/>
            <FosterCard/>
            <FosterCard/>
            <FosterCard/>
          </section>

{/* If no fostercards then show available fosters? */}
          <h2 className='mx-10 py-2 text-xl'>Available Fosters</h2><br/>
          <section className='flex flex-wrap justify-center gap-4'>
            <FosterCard/>
          </section>
        </>
        : null
      }
      
    </div>
  )
}