import React from 'react'
import Header from './assets/Components/Header'
import Footer from './assets/Components/Footer'

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
