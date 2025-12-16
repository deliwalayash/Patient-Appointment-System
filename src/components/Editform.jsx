import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import doctors from './doctors'

const Editform = () => {

    const navigate=useNavigate()
    const {id}=useParams()
    const [patient,setPatient]=useState({
          name:"",
          age:"",
          date:"",
          mobilenumber:"",
          problem:"",
          doctorname:""
        })

    const [patients,setPatients]=useState(JSON.parse(localStorage.getItem('patients')) || [])

    const foundpatient=patients.find((curEle)=>{
      return curEle.id == id
    })

     const handleChange=(e)=>{
      setPatient({...patient,[e.target.id]:e.target.value})
    }

    useEffect(()=>{
      setPatient(foundpatient)
    },[])

    

    const handleSubmit=(e)=>{
      e.preventDefault()

      const upDatedpatient={
        id:Number(id),
        ...patient
      }

      const newPatientslist=patients.map((curEle)=>{
        return curEle.id==id ? upDatedpatient : curEle
      })

      console.log(newPatientslist)
      setPatients(newPatientslist)
      // localStorage.setItem("patients",JSON.stringify(patients))

       navigate('/viewappointment')
    }

    useEffect(()=>{
    localStorage.setItem("patients",JSON.stringify(patients))
    })


  return (
    <div>
   <form className="max-w-sm mx-auto" onSubmit={handleSubmit} >
 {/* <h1 className='text-black text-3xl'>{id}</h1> */}
  <div className="mb-5">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Name</label>
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required onChange={handleChange} value={patient.name}/>
  </div>
  <div className="mb-5">
    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Age</label>
    <input type="number" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} value={patient.age} />
  </div>
  <div className="mb-5">
    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment Date</label>
    <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} value={patient.date}/>
  </div>
  <div className="mb-5">
    <label htmlFor="mobilenumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
    <input type="number" id="mobilenumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} value={patient.mobilenumber}/>
  </div>
  <div className="mb-5">
    <label htmlFor="problem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Problems</label>
    <input type="text" id="problem" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required value={patient.problem} />
  </div>
  <div className="mb-5">
    <label htmlFor="doctorname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Doctors Name</label>
    <input id="doctorname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required  value={patient.doctorname} disabled/>
  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>
</form>
    </div>
  )
}

export default Editform
