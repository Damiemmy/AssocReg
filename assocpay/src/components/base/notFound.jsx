import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className='w-full py-40 bg-white'>
        <div className='px-6 text-2xl text-center py-5'>
            <h2 className='text-4xl '>Opps! PAGE NOT FOUND</h2>
            
             <Link className={'text-md text-red-300'} to={'/'}>redirect to homepage</Link>
        </div>
      
    </div>
    </div>
  )
}

export default NotFound
