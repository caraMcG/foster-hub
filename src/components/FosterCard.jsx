'use client'
import React, { useState } from 'react'


const FosterCard = () => {

  const [fosterCheckList, setFosterCheckList] = useState([]);

  return (
    <div className='flex-2 flex-col shadow-xl bg-white rounded-lg'>
        <div className='p-24'>
            <p className='mb-4'>info goes here about your foster dog</p>

            {/* medical clearance will be reflected to user but only admin can change it */}
            <fieldset>
              <legend className='mb-2'>Checklist to adoption!</legend>
              <input disabled type="checkbox" id="checklistMedical" name="fostercheckList" className='mb-2 leading-tight'/><label htmlFor="checklistMedical">Medical Clear</label> <br/> 
              <input type="checkbox" id="checklistBio" name="fostercheckList" className='mb-2 leading-tight'/> <label htmlFor="checklistBio">Submitted Bio</label><br/>
              <input type="checkbox" id="checklistPhotos" name="fostercheckList" className='mb-2 leading-tight'/> <label htmlFor="checklistPhotos">Submitted Photos</label><br/>
            </fieldset>
        </div>
    </div>
  );
};

export default FosterCard;
