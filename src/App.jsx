import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Bookappointment from './components/Bookappointment'

const App = () => {
  return (
    <div>
   <BrowserRouter>
      <Navbar></Navbar>
   <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/book-app' element={<Bookappointment></Bookappointment>}></Route>
   </Routes>
   </BrowserRouter>
</div>
  )
}

export default App