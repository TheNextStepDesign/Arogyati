import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'

const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<Landing/>} />
        <Route  path='/Introduction' element={<Landing/>} />
        <Route  path='/about' element={<Landing/>} />
        <Route  path='/services' element={<Landing/>} />
        <Route  path='/form' element={<Landing/>} />
        <Route  path='/testimonial' element={<Landing/>} />
        <Route  path='/contact' element={<Landing/>} />
    </Routes>
  )
}

export default AllRoutes