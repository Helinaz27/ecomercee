import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import Displayer from './assets/Components/Displayer'
import Categories from './assets/Components/Categories'
import LatesArrival from './assets/Components/LatesArrival'
import Products from './assets/Components/Products'

import ShopCatagories from './assets/Components/ShopCatagories'
import DetailPage from './assets/Components/DetailPage'
import CartFinalPage from './assets/Components/CartFinalPage'
import YourCart from './assets/Components/YourCart'
import Main from './assets/Components/Main'
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

