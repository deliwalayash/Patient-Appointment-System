import React from 'react'
import { useParams } from 'react-router-dom'

const Editform = () => {

    const {id}=useParams()
  return (
    <div>
      Edit Form
    </div>
  )
}

export default Editform
