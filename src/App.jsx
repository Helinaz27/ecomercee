import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { Outlet, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <Header/>

        <Outlet/>
      
      <Footer/>




      
    </div>
  )
}

export default App
