'use client'
import React, { useEffect, useState } from 'react';
import UpcomingEvents from '../../components/UpcomingEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';


const UserHomeClient = ({ session }) => {
    const [totalAnimals, setTotalAnimals] = useState(0);
    const [totalinFoster, setTotalinFoster] = useState(0);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const fetchData = async () => {
                try{
                    const res = await fetch('/api/home');
                    if(!res.ok) throw new Error('Failed to fetch data');
                    const data = await res.json();
                    setTotalAnimals(data.totalAnimals);
                    setTotalinFoster(data.totalFostered);
                    setUpcomingEvents(data.upcomingEvents || []);
                    console.log('Upcoming Events:', data.upcomingEvents);

                }catch(error){
                    console.error('Error fetching total animals/fostered:', error);
                }finally{
                    setLoading(false);
                }
            };

            fetchData();

        },[]);


    return(
        <section className='bg-white rounded-xl px-2 w-1/2'>
            {/* w-3/4 */}
        {/* border border-slate-300 shadow-sm'> */}
        <div>
            <div className='mx-10 py-5 text-center'> 
                <h1 className='font-bold text-xl'>Welcome, {session.user.first_name}!</h1>
                <h3>Here's what's happening in our foster family community.</h3>
            </div>

            <div className='flex flex-wrap justify-center gap-20 my-10'>
                <div className='bg-softblue p-8 rounded-xl shadow-md'>
                    <p className='text-center rounded-xl text-textdark font-bold text-lg'>
                        <CountUp end={totalAnimals} duration={1} delay={0}/>
                    <br/>Total Animals Helped</p>
                </div>
                <div className='bg-softprimaryred p-8 rounded-xl shadow-md'>
                    <p className='text-center rounded-xl text-links font-bold text-lg'>
                        <CountUp end={totalinFoster} duration={1} delay={0} />
                        <br/>Currently in Foster Care</p>
                </div>
            </div>
            {/* CONTACT NUMBERS */}
            <div className='flex flex-wrap justify-evenly gap-4 my-10'>
                <div className='basis-auto text-left'>
                   
                   <h2 className='font-bold text-lg'>
                    <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#E63946",}} className='w-10 fa-lg'/> 
                    Important Numbers
                    </h2>
                    <br/>
                    <div className='p-4 rounded-xl border-x border-y border-gray-300 shadow-sm'>
                        <ul className='text-left'>
                            <li className='mb-2'><span className='font-semibold'>Dog Supervisor:</span> 123-456-7890</li>
                            <li className='mb-2'><span className='font-semibold'>Critters Manager:</span> 123-456-7890</li>
                            <li className='mb-2'><span className='font-semibold'>Cat Supervisor:</span> 123-456-7890</li>
                            <li className='mb-2'><span className='font-semibold'>Vet Clinic:</span> 123-456-7890</li>
                            <li><span className='font-semibold'>After Hours Vet:</span> 123-456-7890</li>
                        </ul>
                    </div>
                </div>

                {/* EVENTS */}
                <div className='flex flex-col gap-4 basis-auto text-center'>
                    <h2 className='font-bold text-lg'>Upcoming Events</h2>
                    <br/>

                    { loading ? (
                        <p className='p-6 text-center'>Loading upcoming events...</p>
                    ):  upcomingEvents.length >= 0 ? (
                            
                            upcomingEvents.map(event => (
                                
                                <UpcomingEvents key={event._id} event={event}/>
                                
                                )
                            )
                        )   
                    
                        :   <p className='text-center'>
                            Stay tuned for our upcoming events! 
                            </p>
                        }
                </div>
            </div>
        </div>
        </section>
    );
};

export default UserHomeClient;
  