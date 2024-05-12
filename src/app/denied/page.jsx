import React from 'react';

export default async function DeniedPage() {

    return(
        <div className='flex justify-center text-center'>
            <p>You do not have permissions to view this page.<br/>
            Please contact an admin if you have any questions.</p>
        </div>
    )
}