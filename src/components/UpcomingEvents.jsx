import React, { useState } from 'react'

const UpcomingEvents = ({ event }) => {

    return(
            <div key={event._id} className='flex gap-6 p-4 rounded-xl border-x border-y border-gray-300 shadow-sm'>
                {/* START DATE */}
                <div className='flex flex-col items-center w-16'>
                    <p className='text-center font-semibold'>{new Date(event.start).toLocaleDateString('en-US', {
                        month: 'short',
                    })}</p>
                    <p className='text-center font-bold text-2xl'>{new Date(event.start).toLocaleDateString('en-US', {
                        day: 'numeric',
                    })}</p>
                </div>
                {/* EVENT DETAILS */}
                <div cassName='flex flex-col flex-grow justify-center'>
                    <h3 className='font-bold text-left'>{event.event_title}</h3>
                    {/* <div className='flex'> */}
                        <p className='text-left'>
                            {new Date(event.start).toLocaleTimeString('en-US',{
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                            })} - {new Date(event.end).toLocaleTimeString('en-US',{
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            })}
                        </p>
                    {/* </div> */}
                </div>
                {/* RSVP BUTTON */}
                <div className='flex items-center justify-end ml-auto'>
                    <p className='font-bold text-textdark'>RSVP</p>
                </div>
            </div>
    );
};

export default UpcomingEvents;