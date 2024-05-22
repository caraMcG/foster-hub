'use client'
import React, { useState } from 'react'


const FosterCard = () => {

  const [fosterCheckList, setFosterCheckList] = useState([]);

  return (
    <div className='flex-2 flex-col'>
        <div className='bg-white p-24 rounded-lg'>
            <p className='mb-4'>info goes here about your foster dog<br/>
            Checklist to adoption!
            </p>
            {/* medical clearance will be reflected to user but only admin can change it */}
            <input disabled type="checkbox"/> Medical Clear<br/> 
            <input type="checkbox"/> Submitted Bio<br/>
            <input type="checkbox"/> Submitted Photos<br/>
        </div>
    </div>
  );
};

export default FosterCard;