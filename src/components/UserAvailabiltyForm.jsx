'use client'
import React, { useState } from 'react';

const UserAvailabiltyForm = (props) => {
    const [checkboxArray, setCheckboxArray] = useState([]); 
  
    // let session = props.user;

    return (
        // h-full
    // <div className='flex flex-column justify-center h-full'>
    <>
    <div className='flex h-full flex-col justify-between h-full max-w-md'>
        {/* <form className='flex-1 mb-4 self-center'>             */}
        <form className='flex flex-col flex-grow'>   
            <div className='mb-4'> 
                <fieldset>
                    <legend className='block font-semibold mb-2'>Are you available to foster or are currently fostering?</legend>
                    <input type="radio" id="FosterYes" name="FosterCheckbox" className='mb-2 leading-tight'/><label htmlFor='FosterYes'> Yes, I am currently fostering and/or am available</label><br/>
                    <input type="radio" id="FosterNo" name="FosterCheckbox" className='mb-3 leading-tight'/><label htmlFor='FosterNo'> No, I am not currently available</label>
                </fieldset>
            </div>

            {/* Available to foster checkbox */}
            <div className='mb-4 '>
                <fieldset>
                    <legend className='block font-semibold mb-2'>Availability? <span className='italic font-normal'>(select all that apply)</span></legend>
                    <input type="checkbox" id="AvailableShort" name="Availability" className='mb-2 leading-tight'/> <label htmlFor='AvailableShort'>Short Term / Temporary Support</label><br/>
                    <input type="checkbox" id="AvailableLong" name="Availability" className='mb-2 leading-tight'/> <label htmlFor='AvailableLong'>Long Term </label><br/>
                    <input type="checkbox" id="AvailableSpecific" name="Availability" className='mb-3 leading-tight'/> <label htmlFor='AvailableSpecific'>Day Outings </label> <br/>
                </fieldset>
            </div>

            {/* Short Term Availability */}
            <div className='mb-6'>
                <fieldset>
                    <legend className='block font-semibold mb-2'>Short Term Availability?</legend>
                    <input type="radio" id="ShortAny" name="ShortDetails" className='mb-2 leading-tight'/><label htmlFor='ShortAny'> Any day</label><br/>
                    <input type="radio" id="ShortWeekdays" name="ShortDetails" className='mb-2 leading-tight'/><label htmlFor='ShortWeekdays'> Weekdays only</label><br/>
                    <input type="radio" id="ShortWeekends" name="ShortDetails" className='mb-2 leading-tight'/><label htmlFor='ShortWeekends'> Weekends only</label><br/>
                    <input type="radio" id="ShortSpecific" name="ShortDetails" className='mb-3 leading-tight'/><label htmlFor='ShortSpecific'>  Specific dates:</label>
                </fieldset>
            </div>
           
             {/* Submit Changes */}
             {/* pt-16 */}
             {/* mt-10 */}
             <div className='mt-auto text-center'>
                <button className="px-8 py-4 bg-quartz rounded-lg" type="submit">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
    </>
  );
};

export default UserAvailabiltyForm;