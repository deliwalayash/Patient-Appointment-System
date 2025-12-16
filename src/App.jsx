import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Bookappointment from './components/Bookappointment'

import Editform from './components/Editform'
import Viewappointment from './components/Viewappointment'

const App = () => {
  return (
    <div>
   <BrowserRouter>
      <Navbar></Navbar>
   <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/book-app' element={<Bookappointment></Bookappointment>}></Route>
   <Route path='/book-app/:id' element={<Form></Form>}></Route>
   <Route path='/viewappointment' element={<Viewappointment></Viewappointment>}></Route>
   <Route path='/edit-form/:id' element={<Editform></Editform>}></Route>
   </Routes>
   </BrowserRouter>
</div>
  )
}

export default App