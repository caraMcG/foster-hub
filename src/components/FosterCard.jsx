'use client'
import React, { useState } from 'react'


const FosterCard = () => {

  const [fosterCheck, setFosterCheck] = useState([]);

  return (
    <div className='flex-column'>
        <div className='bg-white p-24 rounded-lg'>
            <p className='mb-4'>info goes here about your foster dog<br/>
            Checklist to adoption!
            </p>
            <input type="checkbox"/> Medical Clear<br/>
            <input type="checkbox"/> Submitted Bio<br/>
            <input type="checkbox"/> Submitted Photos<br/>
        </div>
      </div>
  );
};

export default FosterCard;