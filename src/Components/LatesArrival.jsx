import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'


function LatesArrival() {
  const navigate = useNavigate()

  return (
    <div>
    <div className='flex mx-auto mt-4 flex-col w-3/4 gap-6 items-center'>
    <h1 className='font-bold text-[32px]'> Our Latest Arrival</h1>
    <p className='text-center'>Discover our newest items! We've just added stylish bags, shoes, and clothes for women. Find the latest trends in accessories, footwear, and apparel. Upgrade your wardrobe with our fresh arrivals today!</p>


           <NavLink to='shop'>
                <button className='bg-black text-white px-[38px] py-[12px] rounded-md'>Button</button>
           </NavLink>

    </div>

    <div className='flex h-[400px] justify-center   my-6 mx-auto gap-12'>
        <div className="bg-black self-end w-[300px] h-[350px] ">
          <img src="https://i.pinimg.com/236x/5a/54/62/5a54628313bbde5b5a54be9fd053c090.jpg" alt="" className='h-[350px] w-[300px]'/>
        </div>
        <div className="bg-black self-start w-[350px] h-[350px] ">
          
        <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/18/4041352/1.jpg?5295" alt="" className='h-[350px] w-[300px]'/>

        </div>
        <div className="bg-black self-end w-[300px] h-[350px] ">
        <img src="https://www.refinery29.com/images/11308299.jpg?format=webp&width=720&height=1280&quality=85" alt="" className='h-[350px] w-[300px]'/>

        </div>
    </div>
    
  
</div>
  )
}

export default LatesArrival
