'use client'
import React, { useEffect, useState, lazy } from 'react';

const FosterCard = lazy(() => import('../../components/FosterCard'));


const DashboardClient = ({ session }) => {
    const [fosteredAnimals, setFosteredAnimals] = useState([]);
    const [availableAnimals, setAvailableAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('/api/dash');
                if(!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                setFosteredAnimals(data.animals);

            }catch(error){
                console.error('Error fetching fostered animals:', error);
            }finally{
                setLoading(false);
            }
        };

        fetchData();

    },[]);

    return (
        <section className='bg-white rounded-xl px-2 w-1/2'>  
        {/* w-3/4  */}
            {/* border border-slate-300 shadow-sm */}
            <div >
               

                { loading ? (
                    <p className='p-6 text-center'>Loading foster animals...</p>
                ): fosteredAnimals.length > 0 ? (
                    <>
                        <h2 className='mx-10 py-5 text-xl font-bold'>Your Current Fosters</h2><br/>
                        <section className='flex flex-wrap justify-center gap-20 my-10'>
                
                            { fosteredAnimals.map((animal) => (
                                
                                <FosterCard key={animal._id} animal={animal}/>
                            
                            ))}
                            
                        </section>
                    </>
                ) : <p className='p-6 text-center'>You don't have any foster animals at the moment, take a look at our available fosters when you're ready!</p>}
               
               
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
  
 