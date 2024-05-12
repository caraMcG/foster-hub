'use client'
import React, { useState } from 'react';

const UserProfileForm = (props) => {
    const [checkboxArray, setCheckboxArray] = useState([]); 
  
    let session = props.user;

    return (
    <div>
        <form>
            {/* Account Name */}
            <hr/>
            <label htmlFor='name' className='font-semibold'>Name </label><br/>
            <input type="text" name="name" id="name" placeholder={ session.user.name } className='text-center border border-gray-900 rounded-md py-1'/>
            
            {/* Available to foster checkbox */}
            <br/><br/><hr/>
            <label htmlFor='checkbox' className='font-semibold'>Availability? (select all that apply)</label><br/>
            <input type="checkbox"/> Short Term
            <br/>
            <input type="checkbox"/> Long Term
            <br/>
            <input type="checkbox"/> Day Outings

            {/* Short Term Availability */}
            <br/><br/><hr/>
            <label htmlFor='radio' className='font-semibold'>Short term availability:</label><br/>
            <input type="radio"/> Any day 
            <br/>
            <input type="radio"/> Weekdays only
            <br/>
            <input type="radio"/> Weekends only 
            <br/>
            <input type="radio"/> Specific dates:

            {/* Account Settings for credential users */}
            { session.user.role == 'Cred User' 
                ? <>
                <br/><br/> <br/><br/>
                <hr/>
                <label htmlFor='name'>Password </label><br/>
                <input type="password" name="password" id="password" className='text-center border border-gray-900 rounded-md py-1'/>

                <br/><br/>
                <label htmlFor='name'>Confirm Password </label><br/>
                <input type="password" name="confirm_password" id="confirm_password" className='text-center border border-gray-900 rounded-md py-1'/>
                </>
                : null
            }

            {/* Account Type */}
            <br/><br/><br/>
            <hr/>
            <label className='italic'>Account Type: { session.user.role }</label>
            {/* Submit Account Changes */}
            <br/><br/><br/>
            <div className='text-center'>
                <button className="px-8 py-2 bg-emerald rounded-lg" type="submit">Save Changes
                </button>
            </div>
        </form>
    </div>
  );
};

export default UserProfileForm;