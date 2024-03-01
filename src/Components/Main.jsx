import React from 'react'
import Displayer from './Displayer'
import Categories from './Catagories'
import Products from './Products'
import LatesArrival from './LatesArrival'


function Main() {
  return (
    <div>
      <Displayer/>
      <Categories/>
      <LatesArrival/>
      <Products />
    </div>
  )
}

export default Main
