'use client'
import React, { useEffect, useState, Suspense, lazy } from 'react';

const UserHomeClient = ({ session }) => {

    return(
        <section className='bg-white rounded-xl px-2 w-3/4 border border-slate-300 shadow-sm'>
            <div className='mx-10 py-2 text-center'> 
                <h2>Hey There {session.user.name}!</h2>
                <h3>Catch up here on all the latest your organization has to say!</h3>
            </div>
            <div className='mx-10 py-2'>
                <h2>Important Numbers</h2>
                <ul>
                    <li>Dog contacts: 123-456-7890</li>
                    <li>Critters contacts: 123-456-7890</li>
                    <li>Cat contacts: 123-456-7890</li>
                    <li>Vet: 123-456-7890</li>
                    <li>After Hours Vet contacts: 123-456-7890</li>
                </ul>
            </div>
            <div>
            </div>
        </section>
    );
};

export default UserHomeClient;
  