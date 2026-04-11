import React, { useState } from 'react'

const Association = () => {
  const[associationName,setAssociationName]=useState('')
  const[associationLogo,setAssociationLogo]=useState(null)
  const[associationDescription,setAssociationDescription]=useState('')
  return (
    <div className='w-full py-40 bg-white'>
        <div className='max-w-[1500px] px-6 text-2xl text-center py-5'>
           <div className='flex flex-col border border-solid-2 border-gray-200 w-[600px] flex flex-col mx-auto items-center'></div>
              <h2 className='text-2xl'> Create New Association</h2>
              <div className='w-full flex flex-col mx-auto items-center'>
                <label className='w-full text-left text-gray-500 '>Name</label> 
                <input 
                  type='text' 
                  placeholder='Enter association name'
                  className='p-3 rounded-md w-full'
                  onChange={(e)=>setAssociationName(e.target.value)}
                  required
                />
              </div>
            </div>
        </div>
      
  )
}

export default Association
