import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Viewappintment = () => {
 
 const [patients,setPatients]=useState(JSON.parse(localStorage.getItem('patients')) || [])
 const navigate=useNavigate()

  const handleDelete= (id)=>{
    const newPatients=patients.filter((curEle)=>{
        return curEle.id != id
    })
    setPatients(newPatients)
  }


  useEffect(()=>{
    localStorage.setItem('patients',JSON.stringify(patients))
  },[patients])

  return (
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Patient Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Doctor Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Appointment Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Mobile Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {
            patients.map((curEle)=>{
                return(
               
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200" key={curEle.id}>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {curEle.name}
                </td>
                <td class="px-6 py-4">
                    {curEle.doctorname}
                </td>
                <td class="px-6 py-4">
                    {curEle.date}
                </td>
                <td class="px-6 py-4">
                    {curEle.mobilenumber}
                </td>
                <td class="px-6 py-4">
                   <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={()=>navigate(`/edit-form/${curEle.id}`)}>Edit</button>
                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>{handleDelete(curEle.id)}}>Delete</button>
                </td>
            </tr>
              
                )
            })
          }
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Viewappintment