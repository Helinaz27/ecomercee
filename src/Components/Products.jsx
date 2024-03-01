import React from 'react'
import { NavLink } from 'react-router-dom'

function Products() {
  return (
    <div className='mb-20'>
        <div className='flex mx-auto mt-4 flex-col w-3/4 gap-6 items-center'>
        <h1 className='font-bold text-[32px]'>Our Products</h1>
        <p className='text-center'>We've got you covered with our fantastic selection of heels! Explore our range of stylish and comfortable heels designed to elevate your look and keep you feeling confident all day long. </p>
        <button className='bg-black text-white px-[38px] py-[12px] rounded-md'>Button</button>

        </div>

        <div className='flex justify-center  items-center my-6 mx-auto gap-12'>
            <div className="bg-black w-[300px] h-[250px] ">

            <img src="https://m.media-amazon.com/images/I/51iEQR4RMOL._AC._SR240,240.jpg" alt="" className='h-[250px] w-[300px]'/>

            </div>
            <div className="bg-black w-[300px] h-[250px] ">
              
           
       <img src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/676/L90012.jpg?im=Resize,width=350" alt="" className='h-[250px] w-[300px]'/>
            </div>
            <div className="bg-black w-[300px] h-[250px] ">
              
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/92daa21d3aa37eaa688f9c5f309639c3.jpg?imageView2/2/w/500/q/60/format/webp" alt="" className='h-[250px] w-[300px]'/>
            </div>
        </div>
        
    </div>
  )
}

export default Products
