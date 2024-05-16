'use client'
import React, { useState } from 'react';

const UserAvailabiltyForm = (props) => {
    const [checkboxArray, setCheckboxArray] = useState([]); 
  
    // let session = props.user;

    return (
    <div className='flex flex-column justify-center'>
        <form className='py-10 mb-6'>
            <p><span className='text-red-600'>*</span> required fields</p><br/>
            <div className='mb-4'> 
                <label htmlFor='available' className='block font-semibold '>Are you available to foster or are currently fostering?</label>
                <span className='block italic text-sm mb-2'>select no if you are not available or are no longer open to fostering</span>
                <input type="radio" className='mb-2 leading-tight'/> Yes, I am currently fostering or am available to foster<br/>
                <input type="radio" className='mb-6 leading-tight'/> No, I am taking a break or am no longer available to foster
            </div>


            {/* Available to foster checkbox */}
            <div className='mb-4'>
                <label htmlFor='checkbox' className='block font-semibold mb-2'>Availability? <span className='italic font-normal'>(select all that apply)</span></label>
                <input type="checkbox" className='mb-2 leading-tight'/> <span>Short Term / Temporary Support</span><br/>
                <input type="checkbox" className='mb-2 leading-tight'/> <span>Long Term </span><br/>
                <input type="checkbox" className='mb-6 leading-tight'/> <span>Day Outings </span> <br/>
            </div>

            {/* Short Term Availability */}
            <div className='mb-6'>
                <label htmlFor='radio' className='block font-semibold mb-2'>Short Term Availability?</label>
                <input type="radio" className='mb-2 leading-tight'/> Any day <br/>
                <input type="radio" className='mb-2 leading-tight'/> Weekdays only <br/>
                <input type="radio" className='mb-2 leading-tight'/> Weekends only <br/>
                <input type="radio" className='mb-3 leading-tight'/> Specific dates:
            </div>
           
             {/* Submit Changes */}
             <div className='text-center pt-16'>
                <button className="px-8 py-4 bg-emerald rounded-lg" type="submit">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
  );
};

export default UserAvailabiltyForm;