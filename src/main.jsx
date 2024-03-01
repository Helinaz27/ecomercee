import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import ShopCatagories from './Components/ShopCatagories'
import DetailPage from './Components/DetailPage'
import CartFinalPage from './Components/CartFinalPage'
import YourCart from './Components/YourCart'
import Main from './Components/Main'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  

     <BrowserRouter>
                      <Routes>
                          
                          <Route path='/' element={<App/>} >
                              <Route index element={<Main/>} />
                              <Route path='/detail' element={<DetailPage/>} />
                              <Route path='/cart' element={<YourCart/>} />
                              <Route path='/shop' element={<ShopCatagories/>} />
                              <Route path='/items' element={<CartFinalPage/>} />
                          </Route>
                        
                    </Routes>
  
    </BrowserRouter>


  </React.StrictMode>
 

)

