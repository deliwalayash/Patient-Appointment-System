import React from 'react'
import  doctors  from './doctors'
import { useNavigate } from 'react-router-dom'

const Bookappointment = () => {
  const navigate=useNavigate()

  return (
    <>
    {
     <div className='container mx-auto'>
            <div className='grid grid-cols-4'>
        {
            doctors.map((curELe)=>{ 
return( 
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" key={curELe.id}>

        <img className="rounded-t-lg" src={curELe.img} alt="" />
    <div className="p-5">
           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{curELe.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{curELe.specialization}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{curELe.experience}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{curELe.fees} Rs</p>
      <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>{navigate(`/book-app/${curELe.id}`)}}>Book Now</button>
    </div>
</div>
)
})
        }

      </div>

     </div>
}
   </>
  )
}

export default Bookappointment