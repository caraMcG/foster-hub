import React, { useState } from 'react'
import Image from 'next/image';


const FosterCard = ({ animal }) => {

  function treatAsUTC(a) {
    var result = new Date(a);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  }

  function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
  }

  const intake_date = new Date(animal.intake_date);
  const adopt_date = new Date(animal.adopt_date);
  const adopt_year = adopt_date.getFullYear();
  const today = new Date();

  let daysInCare;
  let adopted;
  let adoptionMessage = null;  

  if(adopt_year < '1901'){
    daysInCare = Math.floor(daysBetween(intake_date, today));
  }
  else{
    daysInCare = daysBetween(intake_date, adopt_date);
    adopted = true; 
    // Format adopt_date and set adoption message
    adoptionMessage = `Adopted ${adopt_date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}!`;
  }

  // flex-col 1st div
  //h-40  2nd div
  return (
    <div className='flex flex-col shadow-xl bg-white rounded-lg border border-slate-200'>
        <div className='flex-2 flex-col h-40'>
          <Image 
            src = {'/'+animal.imageUrl[0]} 
            width= {300}
            height= {400} 
            className='w-full h-full object-cover rounded-t-lg text-center'
            quality={100}
            draggable = 'false'
            alt= {`${animal.name}'s Picture`}
          />
        </div>
        {/* className="max-w-sm aspect-auto rounded-t-lg" */}
        <div className='flex-col p-6'>
          <div className='text-center mb-8'>
            <p className='font-extrabold text-lg'>{animal.name}</p>
            <p><span className='font-bold italic'>{daysInCare}</span> Days in care</p>
            {adopted ? <p className='mb-6 text-links font-extrabold'>{adoptionMessage}</p> : <p className='mb-6'></p> }
          </div>
          <form className='flex flex-col'>
            <fieldset>
              <legend className='mb-2'>Checklist to Adoption!</legend>
              <input disabled type="checkbox" id={animal._id + 'checklistMedical'} name="fostercheckList" className='mb-2 leading-tight'/>
              <label htmlFor="checklistMedical"> Medical Clear</label> <br/> 

              <input type="checkbox" id={animal._id + 'checklistBehavioural'} name="fostercheckList" className='mb-2 leading-tight'/>
              <label htmlFor="checklistBehavioural"> Behaviour Clear</label> <br/> 

              <input type="checkbox" id={animal._id + 'checklistBio'} name="fostercheckList" className='mb-2 leading-tight'/> 
              <label htmlFor="checklistBio"> Submitted Bio</label><br/>

              <input type="checkbox" id={animal._id + 'checklistPhotos'} name="fostercheckList" className='mb-2 leading-tight'/> 
              <label htmlFor="checklistPhotos"> Submitted Photos</label><br/><br/>
              <div className='flex-1 space-x-6'>
                <button className="py-2 px-4 bg-btnprimary hover:bg-btnhoverp shadow-xl rounded-lg text-center text-white font-bold" type="button">Notes</button>
                <button className="py-2 px-6 bg-btnsecond hover:bg-btnhovers shadow-xl rounded-lg text-center text-white font-bold" type="submit">Save</button>
              </div>
            </fieldset>
          </form>
        </div>
    </div>
  );
};

export default FosterCard;
