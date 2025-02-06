'use client'
import React, { useEffect, useState, Suspense, lazy } from 'react';

const FosterCard = lazy(() => import('../../components/FosterCard'));


const DashboardClient = ({ session }) => {
    const [fosteredAnimals, setFosteredAnimals] = useState([]);
    const [availableAnimals, setAvailableAnimals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('/api/dash');
                if(!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                setFosteredAnimals(data.animals);

            }catch(error){
                console.error('Error fetching fostered animals:', error);
            }
        };

        fetchData();

    },[]);

    return (
        <section className='bg-white rounded-xl px-2 w-3/4 '>
            {/* border border-slate-300 shadow-sm */}
            <div>
                <Suspense fallback={<p className='text-9xl'>Loading Information...</p>}>
                    <h1 className='py-5 text-center'>Hello { session.user.first_name },<br/>Welcome to your Dashboard!</h1>
                </Suspense>
                {fosteredAnimals.length > 0 ?
                    <>
                        <h2 className='mx-10 py-2 text-xl'>Current Fosters</h2><br/>
                        <section className='flex flex-wrap justify-center gap-20 my-10'>
                            
                            <Suspense fallback={<p>Loading Foster Cards...</p>}>
                                { fosteredAnimals.map((animal) => (
                                    
                                    <FosterCard key={animal._id} animal={animal}/>
                                
                                ))}
                            </Suspense>
                        </section>
                    </>
                : <p className='p-6 text-center'>You don't have any foster animals at the moment, take a look at our available fosters when you're ready!</p>}
               
            {/* If no fostercards then show available fosters? */}
                {/* <h2 className='mx-10 py-2 text-xl'>Available to Foster</h2><br/>
                <section className='flex flex-wrap justify-center gap-4'> */}
                {/* <FosterCard/> */}
                {/* </section> */}
            </div>
        </section>
  
      );
};

export default DashboardClient;
  
 