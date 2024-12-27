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
                    <p className='py-5 text-center'>Hello { session.user.name },<br/>Welcome to your Dashboard!</p>
                    <h2 className='mx-10 py-2 text-xl'>Current Fosters</h2><br/>
                </Suspense>
                <section className='flex flex-wrap justify-center gap-20 my-10'>
                    <Suspense fallback={<p>Loading Foster Cards...</p>}>
                        { fosteredAnimals.map((animal) => (
                            
                                <FosterCard key={animal._id} animal={animal}/>
                        
                        
                        ))}
                    </Suspense>
                </section>

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
  
 