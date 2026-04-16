import React, { useEffect, useState } from 'react'
import ApiInstance from '../../service/Api'
const Association = () => {
  const[associationName,setAssociationName]=useState('')
  const[associationDescription,setAssociationDescription]=useState('')

  const addAssociation=  new FormData()
  addAssociation.append("assoName",associationName)
  addAssociation.append("assoDescription",associationDescription)

  handleCreateAssociation=async()=>{
    try{
      const response=await ApiInstance.get('/create-association',addAssociation)
      if (response.ok){
        console.log(response.data)
      }else{
        console.log('An Error Occured')
      }

    }catch(err){
      console.log(err.message)
    }
  }

  useEffect(()=>{
    console.log(associationName,associationDescription)
  },[associationDescription,associationName])
  
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
             
                <textarea
                  placeholder='Enter association Description'
                  className='p-3 rounded-md w-full'
                  onChange={(e)=>setAssociationDescription(e.target.value)}
                  required
                />
                <button
                  onClick={handleCreateAssociation}
                >
                  create
                </button>
              </div>
            </div>
        </div>
      
  )
}

export default Association
