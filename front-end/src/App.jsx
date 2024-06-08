import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/navbar/Navbar'
import AllRoutes from './Pages/AllRoutes'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <div className='p-0 font-sora' >
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
