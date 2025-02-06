import React from 'react'

const DetailsModal = ({ isOpen, onClose, data }) => {

    if (!isOpen) return null;

    return (
<div className="fixed z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      {/* my-8 w-full max-w-lg */}
      <div className="fixed transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z"/>
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15.75" viewBox="0 0 576 512">
                <path d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z"/>
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-base font-semibold text-gray-900" id="modal-title">{data.name}'s History</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                    {/* Below are all current notes available for {data.name}. */}
                </p>
                {data.clearanceData.length > 0 ?
                <div className="table-none md:table-fixed">
                    <table className='w-full text-sm text-left rtl:text-center text-gray-500'>
                        <thead className='text-sm text-gray-700 uppercase text-gray-500'>
                            <tr>
                                <th scope="col" className='pr-6 py-3'>Type</th>
                                <th scope="col" className='pr-6 py-3'>Note</th>
                                <th scope="col" className='pr-6 py-3'>Entry Date</th>
                            </tr>
                        </thead>
                        <tbody>
                          {data.clearanceData.map((item) => 
                              item.notes.map((note, index) => ( 
                                  <tr key={`${item._id}-${index}`} className='bg-white border-b border-gray-400'>
                                      <th scope="row" className="capitalize pr-6 py-2 font-medium text-gray-900 whitespace-nowrap">{index === 0 ? item.type : null}</th>
                                      <td className="pr-6 py-2">{note.entry} </td> 
                                      <td className="pr-6 py-2">{note.entryDate.slice(0,10)}</td>
                                  </tr>
                              ))
                          )}
                        </tbody>
                    </table>
                </div>
                : <p className='text-sm text-gray-500'>{data.name} does not have any notes to read.</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" onClick={onClose} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>





    )

}

export default DetailsModal;