import React, { useState } from 'react'
import Image from 'next/image';
import DetailsModal from './DetailsModal';


const FosterCard = ({ animal }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          <div className='text-center mb-2'>
            <p className='font-extrabold text-lg'>{animal.name}</p>
            <p><span className='font-bold italic'>{daysInCare}</span>  Days in care</p>
            {adopted ? <p className='mb-6 text-links font-extrabold'>{adoptionMessage}</p> : <p className='mb-6'></p> }
          </div>
          
          <form className='flex flex-col'>
            {/* USER EDIT FIELDS */}
            <fieldset>
              <legend className='mb-2'>Checklist to Adoption!</legend>
              {/* BIO */}
              <div className="flex w-full items-center justify-between mb-2">
                <div className="flex items-center flex-1">
                  <input type="checkbox" id={animal._id + 'checklistBio'} name="fostercheckList" className='leading-tight'/> 
                  <label htmlFor="checklistBio" className="ml-2">Bio</label>
                </div>
                <button type="button"
                    className="text-blue-600 text-sm"
                    // onClick={handleOpenBioModal}
                  >
                    {animal.bio ? 'Edit' : 'Submit'}
                  </button><br/>
              </div>
              {/* PHOTOS */}
              <div className="flex w-full items-center justify-between mb-2">
                <div className="flex items-center flex-1">
                  <input type="checkbox" id={animal._id + 'checklistPhotos'} name="fostercheckList" className='leading-tight'/> 
                  <label htmlFor="checklistPhotos" className="ml-2">Photos</label>
                </div>
                <button type="button"
                  className="text-blue-600 text-sm"
                  // onClick={handleOpenBioModal}
                >
                  {animal.photos ? 'Edit' : 'Submit'}
                </button><br/><br/>
              </div>
               {/* FOSTER FAIL? */} 
               {/* log a date of change for this option, since it could co-inside with applications */}
              <div className="flex w-full items-center justify-between mb-8">
                <div className="flex items-center flex-1">
                  <input type="checkbox" id={animal._id + 'checklistBio'} name="fostercheckList" className='leading-tight'/> 
                  <label htmlFor="checklistBio" className="ml-2">Foster Release</label>
                </div>
                <button type="button"
                    className="text-blue-600 text-sm"
                    // onClick={handleOpenBioModal}
                  >
                    {animal.bio ? 'Edit' : 'Submit'}
                  </button><br/>
              </div>
            </fieldset>

            {/* READONLY FIELDS */}
            <fieldset className="mb-4 border border-gray-300 rounded p-2 bg-gray-50">
              <legend className="text-sm font-semibold text-gray-600">Admin Approval</legend>

              <input disabled readOnly type="checkbox" 
                    id={animal._id + 'checklistMedical'} 
                    name="fostercheckList" 
                    className='mb-2 leading-tight bg-gray-100 border border-gray-300 cursor-not-allowed'
                    checked={animal.clearanceData.find((item) => item.type === "medical")?.cleared || false}/>
              <label htmlFor="checklistMedical" className="text-sm text-gray-500 italic ml-2"> Medical Clear</label> <br/> 

              <input readOnly type="checkbox" 
                    id={animal._id + 'checklistBehavioural'} 
                    name="fostercheckList" 
                    className='mb-2 leading-tight bg-gray-100 border border-gray-300 cursor-not-allowed'
                    checked = {animal.clearanceData.find((item) => item.type === "behavioural")?.cleared || false}/>
              <label htmlFor="checklistBehavioural" className="text-sm text-gray-500 italic ml-2"> Behaviour Clear</label> <br/> 
            </fieldset>

            {/* HISTORY & SAVE */}
            <div className='flex-1 space-x-6'>
              <button className="py-2 px-4 bg-btnprimary hover:bg-btnhoverp shadow-xl rounded-lg text-center text-white font-bold" type="button" onClick={handleOpenModal}>Notes</button>
              <DetailsModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal}
                data = {animal}
              />
              <button className="py-2 px-6 bg-btnsecond hover:bg-btnhovers shadow-xl rounded-lg text-center text-white font-bold" type="submit">Save</button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default FosterCard;
